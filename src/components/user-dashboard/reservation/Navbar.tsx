import React from "react";
import Link from "next/link";
import Button from "@/components/landing/Button";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[88%] mx-auto my-0 ">
      <div className="flex flex-row justify-between items-center bg-white w-[31%] rounded-md h-11">
        <Link href="" className="px-5 py-3 font-medium text-sm hover:border-b-2 hover:border-[#01A657]">همه تورها</Link>
        <Link href=""  className="px-5 py-3 font-medium text-sm  hover:border-b-2 hover:border-[#01A657]">لیست استرداد</Link>
      </div>
      <div className="w-[25%] flex flex-row justify-between items-center">
        <Button
          bgColor="bg-[#01A657]"
          titleBtn="ثبت نظر"
          width="w-[46%] "
          fontSize="text-sm font-medium"
          textColor="text-white"
          borderRadius="rounded-md"
          padding=" py-3"
          margin="my-10"
        />
        <Button
          bgColor="bg-[#01A657]"
          titleBtn="استرداد"
          width="w-[46%] "
          fontSize="text-sm font-medium"
          textColor="text-white"
          borderRadius="rounded-md"
          padding=" py-3"
          margin="my-10"
        />
      </div>
    </div>
  );
};

export default Navbar;
