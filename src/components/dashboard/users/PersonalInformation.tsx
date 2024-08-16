import React from "react";
const PersonalInformation = () => {
  return (
    <div className="grid grid-cols-2 2xl:w-[90%] xl:w-[88.5%] md:w-[88%] mx-auto my-4 gap-6  h-[266px]">
      <div className="col-span-1 w-full  h-[266px]">
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center 2xl:w-full xl:w-full md:w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] ">نام</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none text-sm appearance-none md:w-[80%] " />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center 2xl:w-full xl:w-full md:w-full h-[42px] rounded-md py-2 px-6  relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%]   ">کد ملی</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none md:w-[90%] " />
            <img src="/svg/dashboard/Edit_green_icon.svg" alt="" className=" cursor-pointer" />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] ">شماره موبایل</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none md:w-[90%]  " />
            <img src="/svg/dashboard/Edit_green_icon.svg" alt="" className=" cursor-pointer" />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mt-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] ">شماره اضطراری</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none md:w-[90%]  " />
            <img src="/svg/dashboard/Edit_green_icon.svg" alt="" className=" cursor-pointer" />
        </label>
      </div>
      <div className="col-span-1  h-[266px]">
      <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] "> نام خانوادگی</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none text-sm md:w-[90%]  " />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] md:w-[80%] "> تاریخ تولد</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none  " />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] md:w-[80%]  "> جنسیت </span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none " />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mt-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%]  "> وضعیت تاهل</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none md:w-[90%] " />
            <img src="/svg/dashboard/Edit_green_icon.svg" alt="" className="cursor-pointer" />
        </label>
      </div>
    </div>
  );
};

export default PersonalInformation;
