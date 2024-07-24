"use client";
import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import PopularTour from "./PopularTour";

const PopularTourSwiper: React.FC = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={0.9}  spaceBetween={0} className=" w-[85%] mx-auto my-20">
        <SwiperSlide>
          <PopularTour />
        </SwiperSlide>
        <SwiperSlide>
          <PopularTour />
        </SwiperSlide>
        <SwiperSlide>
          <PopularTour />
        </SwiperSlide>
      </Swiper>
      </>
  );
};

export default PopularTourSwiper;
