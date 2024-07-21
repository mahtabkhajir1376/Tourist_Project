"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TourCardDiscount from "./TourCardDiscount";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

type Data = {
  imageSrc: string;
  title: string;
  tourLocation: string;
  primaryTourprice: number;
  discountedPrice: number;
  tourRate: number;
  tourComments: number;
};

type DataDiscount = Data[];

const dataDiscount: DataDiscount = [
  {
    imageSrc: "/image/Imagecard.jpg",
    title: "گلاب گیری کاشان / 3 روزه",
    tourLocation: "تهران",
    primaryTourprice: 2.75,
    discountedPrice: 2000.0,
    tourRate: 4.41,
    tourComments: 136,
  },
  {
    imageSrc: "/image/Imagecard2.svg",
    title: "گلاب گیری کاشان / 3 روزه",
    tourLocation: "تهران",
    primaryTourprice: 2.75,
    discountedPrice: 2000.0,
    tourRate: 4.41,
    tourComments: 136,
  },
  {
    imageSrc: "/image/Imagecard3.svg",
    title: "گلاب گیری کاشان / 3 روزه",
    tourLocation: "تهران",
    primaryTourprice: 2.75,
    discountedPrice: 2000.0,
    tourRate: 4.41,
    tourComments: 136,
  },
];

const SpecialdiscountSwiper: React.FC = () => {

  return (
    <>
      <div className="flex flex-row justify-between items-center w-[84%] mx-auto my-10">
        <h3 className="text-[28px] font-medium">تخفیف های ویژه</h3>
        <a
          href=""
          className="flex flex-row justify-around items-center text-lg font-regular w-[12%] text-[#01A657]"
        >
          مشاهده بیشتر
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0822 23.3321C17.8803 23.3321 17.675 23.2796 17.4883 23.1688C16.03 22.3054 8.75 17.8044 8.75 13.9988C8.75 10.1943 16.0288 5.69209 17.4883 4.82876C18.0448 4.50092 18.76 4.68409 19.0867 5.23709C19.4157 5.79242 19.2313 6.50759 18.6783 6.83542C15.6158 8.65076 11.0833 12.1823 11.0833 13.9988C11.0833 15.8188 15.6147 19.3491 18.6783 21.1621C19.2313 21.4899 19.4157 22.2051 19.0867 22.7604C18.8697 23.1279 18.4812 23.3321 18.0822 23.3321Z"
              fill="#01A657"
            />
          </svg>
        </a>
      </div>
      <Swiper
        slidesPerView={2.6 }
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-[90%] mx-auto my-0"
      >
        {dataDiscount.map((item, index) => {
          return (
            <SwiperSlide className="w-[30%] h-[473px] my-10 mx-auto relative">
              <TourCardDiscount
                key={index}
                imageSrc={item.imageSrc}
                tourTitle={item.title}
                tourRate={item.tourRate}
                tourComments={item.tourComments}
                discountedPrice={item.discountedPrice}
                primaryTourprice={item.primaryTourprice}
                tourLocation={item.tourLocation}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SpecialdiscountSwiper;
