"use client"
import React, { useState } from "react";
import Navbar from "../Navbar";
import FilterBox from "./FilterBox";
import axios from "axios";
import { BASE_URL_API } from "@/utils/services";
import { Data } from "./PopularTourSwiper";
import { useQuery } from "@tanstack/react-query";



const fetchHeaderImage = async (type:string): Promise<Data[]> => {
  const response = await axios.get<Data[]>(
    `${BASE_URL_API}/banner`,
    {
      params: {
        type,
      },
    }
  );
  return response.data;
};


const Header:React.FC=()=> {

  const [type,settype]=useState("header")
  const { data, error, isLoading } = useQuery<Data[], Error>({
    queryKey: ["fetchHeaderImage", type],
    queryFn: () => fetchHeaderImage(type),
  });

  const imageUrl =data?.data[0].media[0].original_url


console.log(imageUrl)


  return (
    <div className=' h-[587px] xl:w-full xl:bg-cover sm:bg-cover  sm:w-full md:w-full lg:w-full relative' style={{backgroundImage: `url(${imageUrl})`}}>
      <Navbar />
      <h1 className="xl:px-12 sm:px-6 md:px-6  lg:px-6 py-14 bg-gradient-to-r from-[#3C005A] to-[#01A688] inline-block  text-transparent bg-clip-text font-iransans font-bold xl:text-[32px] sm:text-xl md:text-2xl lg:text-3xl ">سفرجو دری به سوی رویایی ترین خاطرات (:</h1>
      <FilterBox/>
    </div>
  );
}

export default Header;
