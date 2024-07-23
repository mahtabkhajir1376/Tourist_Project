import React from "react";
import Button from "../landing/Button";

const BuyForm: React.FC = () => {
  return (
    <div className="flex flex-col w-[32.5%] mt-6 shadow-lg rounded-xl h-[622px]">
      <div className="mx-auto w-[85.5%] mt-11 flex flex-col ">
        <h5 className="font-light text-base">انتخاب ماه سفر :</h5>
        <div className="text-sm font-medium w-full flex flex-row justify-start items-center gap-[10px] mt-3 mb-10">
          <span className="bg-[#E8EDEC4D] w-[32.5%] flex justify-center py-2 px-11 rounded-md ">
            تیر
          </span>
          <span className="bg-[#E8EDEC4D] w-[32.5%] flex justify-center py-2 px-11  rounded-md ">
            مرداد
          </span>
          <span className="bg-[#E8EDEC4D] w-[32.5%] flex justify-center py-2 px-11  rounded-md ">
            شهریور
          </span>
        </div>
        <h2 className="text-base font-light">انتخاب بازه‌ی زمانی:</h2>
        <select className="bg-[#E8EDEC4D] w-full text-[#707070] text-sm font-regular py-[13.5px] px-[14px] rounded-md mt-5 mb-10 outline-none ">
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
        <h2 className="text-base font-light">انتخاب تعداد :</h2>
        <select className="bg-[#E8EDEC4D] w-full text-[#707070] text-sm font-regular py-[13.5px] px-[14px] rounded-md mt-5 mb-4 outline-none ">
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
        <p className="text-[#707070] text-xs font-light mx-auto">
          *کودکان زیر 5 سال جزو تعداد نفرات محسوب نمیشوند
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-[85.5%] mx-auto my-12  font-iransansNumber  ">
        <h6 className="font-light text-base">مجموع قیمت :</h6>
        <p className="w-[20%] font-regular text-base">2.750.000</p>
      </div>
      <Button
        bgColor="bg-[#01A657]"
        titleBtn="تایید و ادامه"
        fontSize="text-sm font-bold"
        borderRadius="rounded-md"
        width="w-[85.5%]"
        padding="py-[10.5px]"
        textColor="text-white"
        margin="mx-auto"
      />
    </div>
  );
};

export default BuyForm;
