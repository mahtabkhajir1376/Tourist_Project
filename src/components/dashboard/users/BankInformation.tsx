import React from "react";

function BankInformation() {
  return (
    <div>
      <div className="my-0 mx-auto w-[88.5%]">
        <div className="flex flex-row justify-between items-center  2xl:w-[12%] xl:w-[15%] md:w-[25%] lg:w-[20%]  mb-8 h-full">
          <img src="/svg/dashboard/money_bag_icon.svg" alt="" />
          <h5 className=" font-regular 2xl:text-sm xl:text-sm md:text-xs lg:text-sm ">اطلاعات بانکی</h5>
        </div>
      </div>
      <div className="grid grid-cols-2 w-[88.5%] mx-auto my-4 2xl:gap-[136px] xl:gap-32 md:gap-4 lg:gap-16">
        <div className="col-span-1">
        <label htmlFor="" className="bg-[rgba(232,237,236,0.3)] flex flex-row justify-between items-center 2xl:w-full xl:w-full md:w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <input type="text" placeholder="شماره شبا" className="bg-[rgba(232,237,236,0.1)] outline-none border-none text-sm appearance-none shadow-none md:w-[90%] placeholder:text-xs placeholder:font-light placeholder:text-[#333333]" />
        </label>
        </div>
        <div className="col-span-1">
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center 2xl:w-full xl:w-full md:w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <input type="text" placeholder="شماره کارت" className="bg-[rgba(232,237,236,0.1)] outline-none border-none text-sm appearance-none placeholder:text-xs md:w-[90%]  placeholder:font-light placeholder:text-[#333333] " />
        </label>
        </div>
      </div>
    </div>
  );
}

export default BankInformation;
