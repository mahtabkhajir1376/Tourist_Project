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
    <div className="font-iransansNumber w-[88%] mx-auto my-8 flex flex-row justify-between items-center">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-between items-center w-[60%]">
          <a
            href=""
            className="bg-white shadow-md font-regular text-sm py-4 px-14 rounded-xl h-14 "
          >
            نام تور
          </a>
          <div className="flex flex-row justify-around  items-center w-[30%] shadow-md rounded-xl px-4  py-4 bg-white ">
            <DatePicker
              ref={datePickerRef}
              className="green"
              value={dates}
              onChange={setDates}
              placeholder="تاریخ رفت"
              calendar={persian}
              locale={persian_fa}
              inputClass="  outline-none text-center text-sm font-regular  w-full    placeholder:text-sm placeholder:font-regular placeholder:text-black"
            />

            <img
              src="/svg/arrowdown.svg"
              alt=""
              onClick={openDatePicker}
              className="block cursor-pointer w-6 h-6"
            />
          </div>
          <div className="flex flex-row justify-around  items-center w-[30%] shadow-md rounded-xl px-4  py-4 bg-white ">
            <DatePicker
              ref={backdatepickerRef}
              className="green"
              value={backdates}
              onChange={setbackDates}
              placeholder=" تاریخ برگشت"
              calendar={persian}
              locale={persian_fa}
              inputClass="  outline-none text-center text-sm font-regular  w-full    placeholder:text-sm placeholder:font-regular placeholder:text-black"
            />

            <img
              src="/svg/arrowdown.svg"
              alt=""
              onClick={openbackDatePicker}
              className="block cursor-pointer w-6 h-6"
            />
          </div>
          <div className="w-14 h-14 shadow-md flex flex-row justify-center items-center rounded-xl">
            <img
              src="/svg/dashboard/search_outline-green_icon.svg"
              alt=""
              className=" w-6 h-6  cursor-pointer"
            />
          </div>
        </div>
        <CustomSelect />
        <Link href="/dashboard">
          <img src="/svg/dashboard/arrow_left.svg" alt="" className="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
