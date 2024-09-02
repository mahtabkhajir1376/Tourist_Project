"use client";
import React from "react";
import SingleCategory from "./SingleCategory";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type Data = {
  success: string;
  message: string;
  data: item[];
};
type item = {
  id: string;
  title: string;
  description: string;
};

type data = {
  title: String;
  src: string;
  imageHeight?: string;
};

type categoryDate = string[];






const Category: React.FC = () => {


  const categoryImages: categoryDate = [
    "/image/category/forest.png",
    "/image/category/beach.png",
    "/image/category/mosque.png",
    "/image/category/boom.png",
    "/image/category/history.png",
    "/image/category/forien.png"
  ];

  const fetchCategory = async (): Promise<Data> => {
    const response = await axios.get<Data>(
      "http://mohammad-mokhtari.ir/safarjoo/api/categories"
    );
    return response.data;
  };

  const { data, error, isLoading } = useQuery<Data, Error>({
    queryKey: ["fetchCategory"],
    queryFn: fetchCategory,
  });

  const newArray = data?.data.slice(2, 8);
const finalCategoryData=newArray?.map((item,index)=>{
  return{
    ...item,
    imageUrl:categoryImages[index]
  }
})

console.log(finalCategoryData)




  return (
    <div className="flex flex-row justify-around items-center my-20 2xl:w-[83%] mx-auto  xl:w-[95%] sm:w-full lg:w-full sm:justify-around xl:mx-auto ">
      {finalCategoryData?.map((item) => {
        return <SingleCategory title={item.title} imageSrc={item.imageUrl} key={item.id} />;
      })}
    </div>
  );
};

export default Category;
