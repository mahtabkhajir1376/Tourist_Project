"use client"; 
import React from "react"; 
import DatePicker from "react-multi-date-picker"; 
import persian from "react-date-object/calendars/persian"; 
import persian_en from "react-date-object/locales/persian_fa"; 
import "react-multi-date-picker/styles/colors/green.css"; 

export default function DateTime() { 
  return ( 
    <div className="flex flex-col sm:flex-row sm:w-[366px] sm:h-[32px] gap-[10px] sm:gap-[22px] mx-4 mt-20 justify-center sm:items-center xl:mx-10 2xl:mx-16"> 
      <div className="w-full sm:w-[95px] h-[24px]"> 
        <h2 className="text-base medium leading-6 font-iransans"> 
          تاریخ و مدت : 
        </h2> 
      </div> 
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-[10px] w-full sm:w-[250px] h-[32px] "> 
        <p className="text-[#00000080]">از</p> 
        <DatePicker 
          className="green" 
          calendar={persian} 
          locale={persian_en} 
          calendarPosition="bottom-right" 
          inputClass="custom-input border rounded-md border-[#01A657] w-[110px] h-8 p-1 bg-white shadow-md transition-shadow duration-200 focus:outline-none focus:border-[#01A657]" 
          placeholder="__  / __  / __" 
        /> 
        <p className="text-[#00000080]">تا</p> 
        <DatePicker 
          className="green" 
          calendar={persian} 
          locale={persian_en} 
          calendarPosition="bottom-right" 
          inputClass="custom-input border rounded-md border-[#01A657] w-[110px] h-8 p-1 bg-white shadow-md transition-shadow duration-200 focus:outline-none focus:border-[#01A657]" 
          placeholder="__  / __  / __" 
        /> 
      </div> 
    </div> 
  ); 
}
