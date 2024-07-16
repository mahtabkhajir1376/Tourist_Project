"use client"
import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import PopularTour from './PopularTour';

function Section2() {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
      <SwiperSlide><PopularTour/></SwiperSlide>
      <SwiperSlide><PopularTour/></SwiperSlide>
      <SwiperSlide><PopularTour/></SwiperSlide>
    </Swiper>
  </>
  )
}

export default Section2