"use client";
import React from "react";
import CustomSelect from "./CustomSelect";
import Link from "next/link";

function AcceptedHeader() {
  return (
    <div className=" flex flex-row justify-between items-center w-[88%] mx-auto my-4 font-iransansNumber">
      <div className="w-[60%] bg-white py-[13.5px] flex flex-row justify-between items-center px-2 rounded-md  shadow-md ">
        <span className="border-l-2 border-[#01A657] px-6  text-sm font-medium py-1">
          تور سه روزه مشهد
        </span>
        <span className="border-l-2 border-[#01A657] px-6  text-sm font-medium py-1">
          زیارت حرم ،بازدید از کوه سنگی و...
        </span>
        <span className="px-6 text-sm font-medium py-1">
          قیمت : 2000000 <span className="text-xs font-regular">تومان</span>
        </span>
      </div>
      <CustomSelect />
      <Link href="/dashboard">
        <img src="/svg/dashboard/arrow_left.svg" alt="" className="" />
      </Link>
    </div>
  );
}

export default AcceptedHeader;
