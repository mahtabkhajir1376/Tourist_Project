"use client";
import React from "react";
import Select, { type DropdownIndicatorProps, components } from "react-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";


const CaretDownIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9999 16.5001C8.7339 16.5001 4.8789 10.2601 4.1399 9.00912C3.8579 8.53412 4.0159 7.92112 4.4909 7.64012C4.9669 7.35712 5.5799 7.51712 5.8599 7.99112C7.4149 10.6161 10.4399 14.5001 11.9999 14.5001C13.5619 14.5001 16.5869 10.6161 18.1399 7.99112C18.4209 7.51712 19.0359 7.35712 19.5089 7.64012C19.9839 7.92012 20.1419 8.53312 19.8599 9.00912C19.1209 10.2601 15.2659 16.5001 11.9999 16.5001Z"
        fill="#01A657"
      />
    </svg>
  );
};

const options = [
  { value: "Male", label: "مرد" },
  { value: "Female", label: "زن" },
];

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

function PassengerInformation() {

  
  return (
    <div className="2xl:w-[82%] sm:w-[90%] shadow-2xl mx-auto mb-8 h-[386px] py-10 2xl:px-20 sm:px-10 rounded-xl">
      <div className="flex flex-row justify-start items-center 2xl:gap-12 sm:gap-6">
        <div className="flex flex-row justify-between items-center 2xl:w-[10%] md:w-[16%] lg:w-[12%]">
          <img src="/svg/purpuleperson.svg" alt="" />
          <p className="2xl:text-base font-regular sm:text-sm md:text-base xl:text-base">مسافر اول</p>
        </div>
        <div className="flex flex-row justify-around items-center 2xl:w-[10%] sm:w-[20%] md:w-[17%] lg:w-[13%]">
          <label htmlFor="" className="2xl:text-sm font-regular sm:text-xs md:text-sm xl:text-sm " >
            بزرگسالان
          </label>
          <input
            type="radio"
            name="radio-5"
            className="radio radio-success bg-[#DDFFF8] border-none"
            defaultChecked
          />
        </div>
        <div className="flex flex-row justify-around items-center 2xl:w-[16%] sm:w-[35%] md:w-[27%] lg:w-[20%]">
          <label htmlFor="" className="2xl:text-sm sm:text-xs md:text-sm xl:text-sm font-regular">
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
      <div className="grid grid-cols-2 mt-10 2xl:gap-[76px] sm:gap-2 md:gap-4 xl:gap-16">
        <div className="col-span-1 grid grid-rows-3  h-[252px]">
          <input
            type="text"
            placeholder="نام مسافر"
            className="input input-ghost bg-[#E8EDEC4D] sm:text-sm xl:text-base 2xl:w-full sm:w-full row-span-1"
          />
          <input
            type="text"
            placeholder="کد ملی"
            className="input input-ghost bg-[#E8EDEC4D] sm:text-sm xl:text-base  2xl:w-full  row-span-1"
          />
        </div>
        <div className="col-span-1 grid grid-rows-3  h-[252px] ">
          <input
            type="text"
            placeholder=" نام خانوادگی"
            className="input input-ghost bg-[#E8EDEC4D] sm:text-sm xl:text-base 2xl:w-full sm:w-full  row-span-1"
          />

          <Select
            components={{ DropdownIndicator }}
            placeholder={"جنسیت"}
            isSearchable={false}
            options={options}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                background: "#E8EDEC4D",
                outlineColor: "green",
                border: "none",
                padding: "4px 5px",
                color: "#f8f8f879",
              }),
              indicatorSeparator: () => ({ display: "none" }),
            }}
            className="outline-[#01A657] sm:text-sm xl:text-base"
          />
          <DatePicker
            render={
              <div className="flex flex-tow justify-between items-center bg-[#E8EDEC4D] px-[14px] rounded-lg">
                <input type="text" className="bg-[#E8EDEC4D] border-none outline-none py-3 placeholder:sm:text-sm  placeholder:xl:text-base" onChange={(e)=>(e.target.value)} placeholder="تاریخ تولد" />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9999 16.5001C8.7339 16.5001 4.8789 10.2601 4.1399 9.00912C3.8579 8.53412 4.0159 7.92112 4.4909 7.64012C4.9669 7.35712 5.5799 7.51712 5.8599 7.99112C7.4149 10.6161 10.4399 14.5001 11.9999 14.5001C13.5619 14.5001 16.5869 10.6161 18.1399 7.99112C18.4209 7.51712 19.0359 7.35712 19.5089 7.64012C19.9839 7.92012 20.1419 8.53312 19.8599 9.00912C19.1209 10.2601 15.2659 16.5001 11.9999 16.5001Z"
                    fill="#01A657"
                  />
                </svg>
              </div>
            }
            calendar={persian}
            locale={persian_fa}
            calendarPosition="top-right"
          />
        </div>
      </div>
    </div>
  );
}

export default PassengerInformation;
