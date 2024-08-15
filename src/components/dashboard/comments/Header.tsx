"use client";
import React, { useState, useRef } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import Link from "next/link";
import CustomSelect from "./CustomSelect";

const Header: React.FC = () => {
  const [dates, setDates] = useState(null);
  const [backdates, setbackDates] = useState(null);

  const datePickerRef = useRef();
  const backdatepickerRef = useRef();

  const openDatePicker = () => {
    datePickerRef.current.openCalendar();
  };
  const openbackDatePicker = () => {
    backdatepickerRef.current.openCalendar();
  };

  return (
    <div className="font-iransansNumber 2xl:w-[88%] md:w-[88%] lg:w-[88%] xl:w-[88%] mx-auto my-8 flex flex-row justify-between items-center">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-between items-center 2xl:w-[60%] md:w-[60%] lg:w-[60%]">
          <a
            href=""
            className="bg-white shadow-md font-regular 2xl:text-sm md:text-[10px] lg:text-xs xl:text-sm 2xl:py-4 md:py-2 flex justify-center items-center  2xl:w-[20%] md:w-[18%] lg:w-[20%] rounded-xl 2xl:h-14 md:h-10 "
          >
            نام تور
          </a>
          <div className="flex flex-row justify-around  items-center 2xl:w-[25%] md:w-[27%] lg:w-[27%] md:px-2 shadow-md rounded-xl 2xl:px-4  2xl:py-4 2xl:h-14  bg-white ">
            <DatePicker
              ref={datePickerRef}
              className="green"
              value={dates}
              onChange={setDates}
              placeholder="تاریخ رفت"
              calendar={persian}
              locale={persian_fa}
              inputClass="  outline-none text-center 2xl:text-sm md:text-[10px] lg:text-xs xl:text-sm font-regular md:h-10   w-full    placeholder:2xl:text-sm placeholder:lg:text-xs  placeholder:md:text-[10px]  placeholder:font-regular placeholder:text-black"
            />

            <img
              src="/svg/arrowdown.svg"
              alt=""
              onClick={openDatePicker}
              className="block cursor-pointer 2xl:w-6 2xl:h-6 md:w-3 md:h-3 lg:w-4 lg:h-4"
            />
          </div>
          <div className="flex flex-row justify-around  items-center 2xl:w-[25%] md:w-[30%] lg:w-[27%] md:px-2 2xl:px-4  2xl:py-4  shadow-md rounded-xl  2xl:h-14   bg-white ">
            <DatePicker
              ref={backdatepickerRef}
              className="green"
              value={backdates}
              onChange={setbackDates}
              placeholder=" تاریخ برگشت"
              calendar={persian}
              locale={persian_fa}
              inputClass="  outline-none text-center 2xl:text-sm md:text-[10px]  lg:text-xs font-regular  w-full md:h-10 placeholder:lg:text-xs   placeholder:2xl:text-sm  placeholder:md:text-[10px]   placeholder:font-regular placeholder:text-black"
            />

            <img
              src="/svg/arrowdown.svg"
              alt=""
              onClick={openbackDatePicker}
              className="block cursor-pointer 2xl:w-6 2xl:h-6 md:w-3 md:h-3 lg:w-4 lg:h-4"
            />
          </div>
          <div className="2xl:w-14 2xl:h-14 md:w-10 md:h-10  shadow-md flex flex-row justify-center items-center rounded-xl">
            <img
              src="/svg/dashboard/search_outline-green_icon.svg"
              alt=""
              className=" 2xl:w-6 2xl:h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 cursor-pointer"
            />
          </div>
        </div>
        <CustomSelect />
        <Link href="/dashboard">
          <img src="/svg/dashboard/arrow_left.svg" alt="" className="2xl:w-[38px] 2xl:h-[38px] md:w-6 md:h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
