import React from "react";
const PersonalInformation = () => {
  return (
    <div className="grid grid-cols-2 w-[88.5%] mx-auto my-4 gap-[136px] h-[266px]">
      <div className="col-span-1  h-[266px]">
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] ">نام</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none text-sm appearance-none" />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] ">کد ملی</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none " />
            <img src="/svg/dashboard/Edit_green_icon.svg" alt="" className=" cursor-pointer" />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] ">شماره موبایل</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none  " />
            <img src="/svg/dashboard/Edit_green_icon.svg" alt="" className=" cursor-pointer" />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mt-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] ">شماره اضطراری</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none  " />
            <img src="/svg/dashboard/Edit_green_icon.svg" alt="" className=" cursor-pointer" />
        </label>
      </div>
      <div className="col-span-1  h-[266px]">
      <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] "> نام خانوادگی</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none text-sm " />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] "> تاریخ تولد</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none  " />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%] "> جنسیت </span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none " />
        </label>
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mt-6">
            <span className="font-light text-xs text-[#01A657] absolute bottom-[88%] right-[4%]  "> وضعیت تاهل</span>
            <input type="text" className="bg-[rgba(232,237,236,0.1)] outline-none border-none " />
            <img src="/svg/dashboard/Edit_green_icon.svg" alt="" className="cursor-pointer" />
        </label>
      </div>
    </div>
  );
};

export default PersonalInformation;
