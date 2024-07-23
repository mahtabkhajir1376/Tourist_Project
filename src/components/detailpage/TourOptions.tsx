import { describe } from "node:test";
import React from "react";

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
  return (
    <div className=" flex flex-col w-[49%] mt-6 ">
      <div className="flex flex-row justify-between items-center w-[78%] mb-20">
        <h1 className="text-2xl font-medium">تور و کمپ جنگل گیسوم</h1>
        <h6 className="font-ultraLight text-sm">
          (اسکان به صورت چادر در دل جنگل های گیسوم)
        </h6>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]">
        {optionData.map((item) => {
          return (
            <div className="flex  items-center justify-center  bg-white dark:bg-gray-950 ml-5">
              <div className="max-w-md rounded-3xl p-px bg-gradient-to-r from-[#7B4794] to-[#01A657] ] ">
                <div className="rounded-[calc(1.5rem-1px)]  h-32 w-36 bg-white dark:bg-gray-900 flex flex-col justify-around items-center py-3 ">
                  <h5 className="text-base font-ultraLight">{item.title}</h5>
                  <p className="text-base font-regular  ">{item.describtion}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-[78px] font-iransansNumber">
        <h3 className="font-medium text-2xl mb-8">جزئیات اقامت :</h3>
        <li className="text-[22px] font-regular  leading-[56px]">
          1 روز در مسیر و توقف در اماکن گردشگردی در مسیر
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          1 روز جنگل گردی
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          1 روز کمپ و چادر
        </li>
      </div>
      <div className="mb-[78px] font-iransansNumber">
        <h3 className="font-medium text-2xl mb-8"> خدمات تور :</h3>
        <li className="text-[22px] font-regular  leading-[56px]">
          تمام وعده های غذایی شما حتی تا یک وعده اضافه با تور میباشد
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          همراهی بومیان آن منطقه جهت کشف مناطق بکر و دست نخورده
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          همراهی عکاس گروهی برای ثبت لحظات ناب شما
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          تورلیدر با تجربه برای امنیت خاطر شما
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          گشت و گذار آزادانه در مناطق مشخص شده طبق نظر تورلیدر شما
        </li>
      </div>
    </div>
  );
};

export default TourOptions;
