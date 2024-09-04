"use client"
import React from "react";
import { useSelector } from "react-redux";
import { TourItem } from "../landing/PopularTourSwiper";


type data = {
  title: string;
  describtion: string;
};

type OptionData = data[];

const optionData: OptionData = [
  { title: "غذا", describtion: "همه وعده ها" },
  { title: "مدت", describtion: "همه وعده ها" },
  { title: "نوع سفر", describtion: "همه وعده ها" },
  { title: "اقامت", describtion: "همه وعده ها" },
];

const TourOptions: React.FC = () => {

  const tourData:TourItem =useSelector((state)=>state.tour.tourData)


const finalData:TourItem =tourData?.data
console.log(finalData)

  return (
    <div className=" flex flex-col 2xl:w-[49%] sm:[35%] lg:w-[45%] mt-6 ">
      <div className="flex flex-row justify-between items-center 2xl:w-[50%] sm:w-[90%] md:w-[95%] lg:w-full xl:w-[78%] mb-20">
        <h1 className="2xl:text-2xl sm:text-[14px] font-medium md:text-base lg:text-lg xl:text-2xl">{finalData?.tour_detail.title}</h1>
        <h6 className="font-ultraLight 2xl:text-sm sm:text-[9px] md:text-xs xl:text-sm">
          ({finalData?.tour_detail.description})
        </h6>
      </div>
      <div className="flex flex-row justify-start items-center 2xl:w-[90%] sm:w-[60%] md:w-[90%] lg:w-full">
        {optionData.map((item) => {
          return (
            <div className="flex  items-center justify-center  bg-white dark:bg-gray-950 ml-5">
              <div className="max-w-md rounded-3xl p-px bg-gradient-to-r from-[#7B4794] to-[#01A657] ] ">
                <div className="rounded-[calc(1.5rem-1px)]  2xl:h-32 2xl:w-36 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:h-28 lg:w-28 bg-white dark:bg-gray-900 flex flex-col justify-around items-center py-3 ">
                  <h5 className="2xl:text-base sm:text-[12px] font-ultraLight sm:text-sm lg:text-base ">{item.title}</h5>
                  <p className="2xl:text-base sm:text-[8px] font-regular md:text-[10px] lg:text-[12px]  ">{item.describtion}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-[78px] font-iransansNumber">
        <h3 className="font-medium 2xl:text-2xl sm:text-lg lg:text-xl mb-8">جزئیات اقامت :</h3>
        <li className="2xl:text-[22px] sm:text-sm font-regular lg:text-base  2xl:leading-[56px]">
          1 روز در مسیر و توقف در اماکن گردشگردی در مسیر
        </li>
        <li className="2xl:text-[22px] sm:text-sm font-regular  lg:text-base 2xl:leading-[56px] ">
          1 روز جنگل گردی
        </li>
        <li className="2xl:text-[22px] sm:text-sm font-regular  lg:text-base 2xl:leading-[56px] ">
          1 روز کمپ و چادر
        </li>
      </div>
      <div className="mb-[78px] font-iransansNumber">
        <h3 className="font-medium  mb-8  2xl:text-2xl sm:text-lg lg:text-xl  "> خدمات تور :</h3>
        <li className="2xl:text-[22px] sm:text-sm font-regular lg:text-base  2xl:leading-[56px]">
          تمام وعده های غذایی شما حتی تا یک وعده اضافه با تور میباشد
        </li>
        <li className="2xl:text-[22px] sm:text-sm font-regular lg:text-base  2xl:leading-[56px] ">
          همراهی بومیان آن منطقه جهت کشف مناطق بکر و دست نخورده
        </li>
        <li className="2xl:text-[22px] sm:text-sm font-regular lg:text-base  2xl:leading-[56px] ">
          همراهی عکاس گروهی برای ثبت لحظات ناب شما
        </li>
        <li className="2xl:text-[22px] sm:text-sm font-regular lg:text-base  2xl:leading-[56px] ">
          تورلیدر با تجربه برای امنیت خاطر شما
        </li>
        <li className="2xl:text-[22px] sm:text-sm font-regular lg:text-base  leading-[56px] ">
          گشت و گذار آزادانه در مناطق مشخص شده طبق نظر تورلیدر شما
        </li>
      </div>
    </div>
  );
};

export default TourOptions;
