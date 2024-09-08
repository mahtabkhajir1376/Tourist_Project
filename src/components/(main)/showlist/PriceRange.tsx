"use client";
import { useState } from "react";
import React from "react";

const PriceRange: React.FC = () => {


  const[pricevalue,setpricevalue]=useState<number>(5000000)


  console.log(pricevalue)
  return (
    <div className="w-full mt-16   font-iransansNumber ">
      <h2 className="text-base font-medium mb-5">محدوده قیمت:</h2>
      <div className="flex flex-row items-center justify-between  w-full h-[72px] font-iransansNumber ">
        <span className="font-extralight text-sm w-[30%]  mt-4  text-center">
          تا 16.000.000 تومان
        </span>
        <span className="font-demiBold text-sm  my-14 text-center ">{`${pricevalue}  تومان`}</span>
        <span className="font-extralight text-sm w-[30%] mt-4  text-center">
          از 1.000.000 تومان
        </span>
      </div>

      <input
        type="range"
        min="1000000"
        defaultValue="5000000"
        max="16000000"
        className=" range range-xs  range-success  bg-[#DDFFF8]  h-3  w-full top-[7px] rounded-xl  my-0 mx-auto "
        value={pricevalue}
        onChange={(e)=>setpricevalue(Number(e.target.value))}
      />
    </div>
  );
};

export default PriceRange;
