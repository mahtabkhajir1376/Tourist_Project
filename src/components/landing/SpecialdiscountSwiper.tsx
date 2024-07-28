"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TourCardDiscount from "./TourCardDiscount";
import Link from "next/link";

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
    <div className="bg-[#E8FCFF] h-[738px] flex flex-col items-center justify-center">
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto  ">
        <h3 className="xl:text-[28px] font-medium sm:text-lg md:text-[22px] lg:text-[24px] 2xl:text-[28px]  ">
          تخفیف های ویژه
        </h3>
        <Link
          href="/ShowList"
          className="flex flex-row justify-around items-center xl:text-lg 2xl:text-lg sm:text-xs lg:text-base  font-regular xl:w-[12%] 2xl:w-[12%]  text-[#01A657]"
        >
          مشاهده بیشتر
        </Link>
      </div>
      <Swiper
        slidesPerView={2.6}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-[90%] mx-auto my-0 "
      >
        {dataDiscount.map((item, index) => {
          return (
            <SwiperSlide className="w-[30%]  my-10 mx-auto relative">
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
    </div>
  );
};

export default SpecialdiscountSwiper;
