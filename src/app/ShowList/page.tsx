import React from "react";
import Navbar from "@/components/Navbar";
import Numberofpeople from "@/components/Numberofpeople";
import PriceRange from "@/components/showlist/PriceRange";
import TravelCategory from "@/components/showlist/TravelCategory";
import DateTime from "@/components/showlist/DateTime";
import TheDesiredCity from "@/components/showlist/TheDesiredCity";
import ShowListCart from "@/components/showlist/ShowListCart";

export default function page() {
  return (
    <div className="font-iransansNumber bg-[#F8F8F8]    ">
      <Navbar bgColor="bg-[#F8F8F8]" />

      <h1 className=" text-2xl font-regular flex flex-row w-[90%] mx-auto my-8  ">
        تخفیف های ویژه
      </h1>
      <div className="flex flex-row w-[90%]  justify-between items-start mx-auto my-0 ">
        <div className="flex flex-col  w-[35%] h-[950px] rounded-md py-8 px-6  shadow-xl shadow-[#E3EBE9]  bg-white ">
          <Numberofpeople />
          <DateTime />
          <PriceRange />
          <TheDesiredCity />
          <TravelCategory />
        </div>
          <ShowListCart />
      </div>
    </div>
  );
}
