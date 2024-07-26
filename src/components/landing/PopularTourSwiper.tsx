"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularTour from "./PopularTour"
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
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto mt-24">
        <h3 className="xl:text-[28px] font-medium sm:text-lg md:text-[22px] lg:text-[24px] 2xl:text-[28px]  ">
          تورهای محبوب
        </h3>
      </div>
      <Swiper
        slidesPerView={2.6}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-[90%] mx-auto mb-24"
      >
        {dataDiscount.map((item, index) => {
          return (
            <SwiperSlide className="w-[30%] h-[473px] my-10 mx-auto relative">
              <PopularTour
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
