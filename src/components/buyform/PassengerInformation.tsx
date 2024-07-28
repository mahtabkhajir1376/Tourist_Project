import React from "react";

function PassengerInformation() {
  return (
    <div className="w-[82%] shadow-2xl mx-auto my-0 h-[386px] py-10 px-20 rounded-xl">
      <div className="flex flex-row justify-start items-center gap-12">
        <div className="flex flex-row justify-between items-center w-[10%]">
          <img src="/svg/purpuleperson.svg" alt="" />
          <p className="2xl:font-base font-regular">مسافر اول</p>
        </div>
        <div className="flex flex-row justify-around items-center w-[10%]">
          <label htmlFor="" className="2xl:text-sm font-regular">
            بزرگسالان
          </label>
          <input
            type="radio"
            name="radio-5"
            className="radio radio-success bg-[#DDFFF8] border-none"
            defaultChecked
          />
        </div>
        <div className="flex flex-row justify-around items-center w-[16%]">
          <label htmlFor="" className="2xl:text-sm font-regular">
            مسافران 4 تا 7 سال
          </label>
          <input
            type="radio"
            name="radio-5"
            className="radio bg-[#DDFFF8] radio-success border-none"
            defaultChecked
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-[76px]">
        <div className="col-span-1 grid grid-rows-3  h-[252px]">
          <input
            type="text"
            placeholder="نام مسافر"
            className="input input-ghost bg-[#E8EDEC4D] w-full row-span-1"
          />
          <input
            type="text"
            placeholder="کد ملی"
            className="input input-ghost bg-[#E8EDEC4D] w-full  row-span-1"
          />
        </div>
        <div className="col-span-1 grid grid-rows-3  h-[252px] ">
        <input
            type="text"
            placeholder=" نام خانوادگی"
            className="input input-ghost bg-[#E8EDEC4D] w-full  row-span-1"
          />
        </div>
      </div>
    </div>
  );
}

export default PassengerInformation;
