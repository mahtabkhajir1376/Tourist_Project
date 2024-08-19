"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import HeartCheckbox from "./LikeCheckBox";
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

interface Card {
  id: string;
  destination: string;
  meal:string;
  tour_detail: {
    title: string;
    description: string;
   
    details: {
      services: string;
    };
  };

  price: string;
  capacity: number;
}

const ShowListCart: React.FC = () => {
  const [tourdata, settourdata] = useState<{ data: Card[] }>({ data: [] });




const fetchCardlist =async(): Promise<Card[]>=>{
  const response =await axios.get<Card[]>('http://mokhtari.v1r.ir/SafarJoo/api/trip');
  return response.data;
}

const { data, error, isLoading }  = useQuery<Card[], Error>({queryKey:['fetchCardlist'],queryFn:fetchCardlist});

console.log(data)
if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>An error occurred: {error.message}</div>;
}

  // useEffect(() => {
  //   fetch("http://mokhtari.v1r.ir/SafarJoo/api/trip")
  //     .then((Response) => Response.json())
  //     .then((tourdata) => settourdata(tourdata))
  //     .catch((error) => console.log(error));
  // }, []);

  // console.log(tourdata.data);

  return (
    <div className="flex flex-col w-[60%] mb-24 ">
      {tourdata.data.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-center items-center mb-4 bg-white w-full rounded-md h-[280px]   "
        >
          <img
            src="/image/CloudJungle.png"
            alt=""
            className=" rounded-xl py-6 pr-2 relative w-72 h-72  "
          />
          <HeartCheckbox position="bottom-[86px] left-11" />
          <div className="flex flex-col justify-between items-center text-base font-medium w-full py-6 pl-7 mx-auto my-0 h-full ">
            <div className="flex flex-row w-full justify-between items-center pb-5i-login">
              <p className="font-medium text-base">{item.tour_detail.title}</p>
              <div className="flex flex-row items-center justify-between  w-[11%] ">
                <p>3.2</p>
                <img src="/svg/showlist/star-show-list.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center pb-5">
              <p className="font-medium text-base">
                {item.tour_detail.description}
              </p>
              <div className="flex flex-row items-center  justify-between  w-[11%]  ">
                <p>35</p>
                <img src="/svg/showlist/chat-show-list.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center pb-5">
              <p className="font-medium text-base">{` امکانات : ${item.meal}`}</p>
              <div className="flex flex-row items-center  justify-between  w-[11%] ">
                <p>{item.capacity}</p>
                <img src="/svg/showlist/pepoul-show-list.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center pb-5">
              <p className="font-medium text-base">
                {`قیمت : ${item.price}`}
                <span className="font-medium text-xs mr-2">تومان</span>
              </p>
              <div className="flex flex-row items-center  justify-between  w-[20%]  ">
                <p>مبدا : تهران</p>
                <img src="/svg/showlist/Location-show-list.svg" alt="" />
              </div>
            </div>
            <button className=" bg-[#01A657] text-white rounded-md h-[42px] w-full font-demiBold  ">
              مشاهده و رزرو
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowListCart;
