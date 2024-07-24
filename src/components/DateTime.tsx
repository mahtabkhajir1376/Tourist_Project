"use client"
import React from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_en from "react-date-object/locales/persian_fa"

export default function  DateTime() {
  return (
    <div className="w-[428px] h-[78px] gap-[22px] mr-[32px] ml-[32px] mt-[75px]  ">
        <div className="w-[92px] h-[24px] ">
            <h2 className="text-base medium leading-6 font-iransans "> تاریخ و مدت : </h2>
        </div>
        <div className="w-[289px] h-[32px]  gap-2.5 flex flex-row justify-center items-center mr-[32px] ml-[32px] mt-[15px] ">
    <DatePicker
      calendar={persian}
      locale={persian_en}
      calendarPosition="bottom-right
      " className=" rounded-md items-center justify-center bg-white "
      placeholder="_ /_ /_"/>
      <DatePicker
      calendar={persian}
      locale={persian_en}
      calendarPosition="bottom-right"
      className=" rounded-md items-center justify-center bg-white "
      placeholder="_ /_ /_"/>
      </div>
      
    </div>
  )
}