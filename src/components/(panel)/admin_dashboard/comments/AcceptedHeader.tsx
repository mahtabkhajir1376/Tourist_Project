"use client";
import React from "react";
import CustomSelect from "./CustomSelect";
import Link from "next/link";

function AcceptedHeader() {
  return (
    <div className=" flex flex-row justify-between items-center 2xl:w-[88%] md:w-[95%] mx-auto my-4 font-iransansNumber">
      <div className="2xl:w-[60%] md:w-[65%] lg:w-[70%]  bg-white 2xl:py-[13.5px] md:py-2 lg:py-3  flex flex-row justify-between items-center px-2 rounded-md  shadow-md ">
        <span className="border-l-2 border-[#01A657] px-6  2xl:text-sm md:text-[10px] lg:text-xs font-medium py-1">
          تور سه روزه مشهد
        </span>
        <span className="border-l-2 border-[#01A657] px-6  2xl:text-sm md:text-[10px]  lg:text-xs font-medium py-1">
          زیارت حرم ،بازدید از کوه سنگی و...
        </span>
        <span className="px-6  2xl:text-sm md:text-[10px]  lg:text-xs font-medium py-1">
          قیمت : 2000000 <span className="text-xs font-regular">تومان</span>
        </span>
      </div>
      <CustomSelect />
      <Link href="/dashboard">
        <img src="/svg/dashboard/arrow_left.svg" alt="" className="2xl:w-[38px] 2xl:h-[38px] md:w-6 md:h-6" />
      </Link>
    </div>
  );
}

export default AcceptedHeader;
