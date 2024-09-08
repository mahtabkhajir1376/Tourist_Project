"use client";
import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import transition from "react-element-popper/animations/transition";

export default function DateTime() {
  return (
    <div className="flex flex-row   mt-20 justify-between items-center font-iransansNumber w-[91%] ">
      <h2 className=" text-base text-black   font-medium w-[30%] ">تاریخ و مدت :</h2>
      <div className="flex flex-col sm:flex-row justify-between items-center  w-[70%]   ">
        <p className="text-[rgb(0,0,0,0.5)] font-light pl-2">از</p>
        <DatePicker
          className="green"
          calendar={persian}
          locale={persian_en}
          animations={[transition({ duration: 800, from: 100 })]}
          calendarPosition="bottom-right"
          inputClass="custom-input border px-2 rounded-md placeholder:text-[#01A657]  placeholder:text-xs  placeholder:text-center border-[#01A657] w-[94%] h-8 p-1 bg-white shadow-md transition-shadow duration-200 text-center focus:outline-none focus:border-[#01A657]"
          placeholder="__  / __  / __"
        />
        <p className="text-[rgb(0,0,0,0.5)] font-light pl-2 ">تا</p>
        <DatePicker
          className="green"
          calendar={persian}
          locale={persian_en}
          animations={[transition({ duration: 800, from: 100 })]}
          calendarPosition="bottom-right"
          inputClass="custom-input border placeholder:text-[#01A657] px-2 placeholder:text-xs  placeholder:text-center  rounded-md border-[#01A657] w-[94%] h-8 flex flex-row justify-center items-center  bg-white shadow-md transition-shadow duration-200 focus:outline-none focus:border-[#01A657]"
          placeholder="__  / __  / __"
        />
      </div>
    </div>
  );
}
