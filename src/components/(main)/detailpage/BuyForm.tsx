import React from "react";
import Button from "../landing/Button";
import Link from "next/link";

const BuyForm: React.FC = () => {
  return (
    <div className="flex flex-col 2xl:w-[32.5%] sm:w-[40%]  lg-w-[30%] mt-6 shadow-lg rounded-xl 2xl:h-[622px] sm:h-[550px] lg:h-[600px]">
      <div className="mx-auto w-[85.5%] mt-11 flex flex-col ">
        <h5 className="font-light 2xl:text-base sm:text-xs md:text-sm lg:text-base">انتخاب ماه سفر :</h5>
        <div className="2xl:text-sm sm:text-[8px] md:text-[10px] lg:text-[12px] font-medium 2xl:w-full sm:full flex flex-row justify-start items-center 2xl:gap-[10px] md:gap-3 lg:gap-[9px] sm:gap-[6px] mt-3 mb-10">
          <span className="bg-[#E8EDEC4D] 2xl:w-[32.5%] sm:w-[20%] flex justify-center py-2 2xl:px-12  sm:px-8 md:px-9 lg:px-12 rounded-md ">
            تیر
          </span>
          <span className="bg-[#E8EDEC4D] 2xl:w-[32.5%] sm:w-[20%] flex justify-center py-2 2xl:px-12 sm:px-8 md:px-9 lg:px-12  rounded-md ">
            مرداد
          </span>
          <span className="bg-[#E8EDEC4D] 2xl:w-[32.5%] sm:w-[20%] flex justify-center py-2 2xl:px-12 sm:px-8 md:px-9  lg:px-12 rounded-md ">
            شهریور
          </span>
        </div>
        <h2 className="2xl:text-base sm:text-xs font-light md:text-sm lg:text-base">انتخاب بازه‌ی زمانی:</h2>
        <div className="flex flex-row bg-[#E8EDEC4D] 2xl:w-full sm:w-full mt-5 mb-10 rounded-md  justify-between items-center">
        <select className=" w-full text-[#707070] bg-[#E8EDEC4D] rounded-md 2xl:text-sm sm:text-[8px] md:text-[10px] lg:text-[12px] font-regular py-[13.5px] px-[14px]  outline-none appearance-none">
          <option disabled selected>
            بازه زمانی دلخواه را مشخص کنید
          </option>
          <option className="text-sm font-medium font-iransansNumber text-black">
            از 1 تیر تا 4 تیر
          </option>
          <option className="text-sm font-medium font-iransansNumber text-black">
            از 10 تیر تا 14 تیر
          </option>
          <option className="text-sm font-medium font-iransansNumber text-black">
            از 26 تیر تا 29 تیر
          </option>
        </select>
        <img src="/svg/arrowdown.svg" className="px-4  cursor-pointer" alt="" />
        </div>

        <h2 className="2xl:text-base sm:text-xs font-light md:text-sm lg:text-base ">انتخاب تعداد :</h2>
        <div className="flex flex-row bg-[#E8EDEC4D] w-full mt-5 mb-4 rounded-md  justify-between items-center">
        <select className="bg-[#E8EDEC4D] w-full text-[#707070] 2xl:text-sm sm:text-[8px] md:text-[10px] lg:text-[12px] font-regular py-[13.5px] px-[14px] rounded-md  outline-none appearance-none">
          <option disabled selected>
            تعداد نفرات
          </option>
          <option className="text-base font-medium font-iransansNumber text-black">
            بزرگسالان :
          </option>
          <option className="text-base font-medium font-iransansNumber text-black">
            کودکان :
          </option>
        </select>
        <img src="/svg/arrowdown.svg" className="px-4" alt="" />
        </div>
        <p className="text-[#707070] 2xl:text-xs sm:text-[8px] md:text-[10px] font-light mx-auto lg:text-[12px]">
          *کودکان زیر 5 سال جزو تعداد نفرات محسوب نمیشوند
        </p>
      </div>
      <div className="flex flex-row justify-between items-center 2xl:w-[85.5%] sm:w-[80%] mx-auto my-12  font-iransansNumber  ">
        <h6 className="font-light 2xl:text-base sm:text-xs md:text-sm lg:text-base">مجموع قیمت :</h6>
        <p className="w-[20%] font-regular 2xl:text-base sm:text-xs md:text-sm lg:text-base">2.750.000</p>
      </div>
      <Link href={"/detailspage/buyform"} className="flex flex-row justify-center" >
      <Button
        bgColor="bg-[#01A657]"
        titleBtn="تایید و ادامه"
        fontSize="2xl:text-sm sm:text-[8px] font-bold md:text-[10px] lg:text-[12px]"
        borderRadius="rounded-md"
        width="w-[85.5%]"
        padding="py-[10.5px]"
        textColor="text-white"
        margin="mx-auto my-0"
      />
      </Link>
    </div>
  );
};

export default BuyForm;
