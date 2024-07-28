"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

type Data = {
  imageSrc: string;
  day: string;
  describtion: string;
};

type DataProgress = Data[];

const dataProgress: DataProgress = [
  {
    imageSrc: "/image/dayoneprogress.jpg",
    day: "روز اول",
    describtion: "صحرای گل در مسیر جنگل های گیسوم که در اینجا توقف خواهید داشت",
  },
  {
    imageSrc: "/image/daytwoprogress.jpg",
    day: "روز دوم",
    describtion:
      "مزرعه برنج شالی در مجاورت جنگل ها که برای بازدید از نحوه کاشت برنج به تماشا خواهید رفت",
  },
  {
    imageSrc: "/image/daytwoprogress.jpg",
    day: "روز سوم",
    describtion:
      "جنگل گیسوم و دره های ان که در هوای زمستان مه آلود و در تابستان نیز خنک و بهایست",
  },
];

const TourProgressSwiper: React.FC = () => {
  return (
    <>
      <h3 className="2xl:text-2xl sm:text-lg md:text-xl xl:text-2xl font-demiBold w-[90%] mx-auto 2xl:mt-20  mb-9 sm:mt-5 ">
        گزارش تصویری از روند تور :
      </h3>

      <Swiper
        slidesPerView={2.5}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-[90%] mx-auto my-0"
      >
        {dataProgress.map((item, index) => {
          return (
            <SwiperSlide className="w-[30%] h-[495px]  mx-auto relative ml-2">
              <img src={item.imageSrc} alt="" />
              <div className="mt-7">
                <span className="2xl:text-[22px] font-demiBold sm:text-sm md:text-base xl:text-lg">{item.day}</span>
                <p className="2xl:mt-7 sm:mt-2 2xl:text-xl sm:text-xs md:text-base xl:text-lg font-regular leading-[30px] ">{item.describtion}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TourProgressSwiper;
