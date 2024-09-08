"use client";
import React from "react";
import Link from "next/link";
import { Data } from "./Category";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const images = [
  "/image/Desert.png",
  "/image/North.png",
  "/image/Tehran.png",
  "/image/South.png",
];

const fetchCategory = async (): Promise<Data> => {
  const response = await axios.get<Data>(
    "http://mohammad-mokhtari.ir/safarjoo/api/categories"
  );

  return response.data;
};

const WhatModelDoYouWant = () => {
  const { data, error, isLoading } = useQuery<Data, Error>({
    queryKey: ["fetchCategory"],
    queryFn: fetchCategory,
  });

  const newArray = data?.data.slice(6, 12);
  const finalArray =newArray?.map((item,index)=>{
    return{
      ...item,
      imageUrl:images[index]
    }
  })
  console.log(finalArray);

  return (
    <div className="bg-[#16BB9C1A] 2xl:h-[582px] xl:h-[580px] sm:h-[450px] lg:h-[500px] flex flex-col justify-center items-center">
      <div className=" flex justify-around flex-row 2xl:w-[85%] xl:w-[85%] sm:w-[95%] my-0 mx-auto 2xl:h-[450px] xl:h-[450px] sm:h-[300px] lg:h-[400px]">
        {finalArray?.map((item, index) => (
          <div
            key={index}
            className=" items-center flex flex-col justify-around w-72 font-iransansNumber  "
          >
            <img
              src={item.imageUrl}
              alt=""
              className="2xl:w-72 2xl:h-72 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-52  lg:h-52"
            />
            <div className="flex flex-col items-center justify-center pt-2">
              <h2 className="font-medium  2xl:text-[22px] xl:text-[22px] sm:text-sm lg:text-lg ">
                {item.title}
              </h2>
              <h4 className="font-light 2xl:text-base xl:text-base sm:text-[12px] lg:text-lg  mt-2">
                {item.description}
              </h4>
            </div>
            <Link
              href="/ShowList"
              className="text-[#01A657]  font-medium 2xl:text-sm xl:text-sm sm:text-[12px] lg:text-sm  flex flex-row justify-between items-center 2xl:w-[23%] xl:w-[23%] sm:w-[38%] lg:w-[26%]"
            >
              مشاهده
              <img
                src="/svg/arrowleft.svg"
                alt=""
                className="text-[#01A657]  2xl:w-3 xl:w-3 sm:w-3  "
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatModelDoYouWant;
