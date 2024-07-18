"use client";
import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const PopularTourSwiper: React.FC = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto my-0">
        <button className="arrow-left arrow">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.7514 29.9992C12.2384 29.9992 11.7389 29.7367 11.4599 29.2642C11.0369 28.5502 11.2739 27.6307 11.9849 27.2092C15.9224 24.8752 21.7499 20.3347 21.7499 17.9992C21.7499 15.6592 15.9239 11.1202 11.9849 8.78924C11.2739 8.36774 11.0369 7.44824 11.4599 6.73424C11.8814 6.02324 12.8009 5.78774 13.5149 6.20924C15.3899 7.31924 24.7499 13.1062 24.7499 17.9992C24.7499 22.8907 15.3914 28.6792 13.5149 29.7892C13.2749 29.9317 13.0109 29.9992 12.7514 29.9992Z"
              fill="#01A657"
            />
          </svg>
        </button>
        <button className="arrow-right arrow">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.2485 29.9992C22.989 29.9992 22.725 29.9317 22.485 29.7892C20.61 28.6792 11.25 22.8922 11.25 17.9992C11.25 13.1077 20.6085 7.31924 22.485 6.20924C23.2005 5.78774 24.12 6.02324 24.54 6.73424C24.963 7.44824 24.726 8.36774 24.015 8.78924C20.0775 11.1232 14.25 15.6637 14.25 17.9992C14.25 20.3392 20.076 24.8782 24.015 27.2092C24.726 27.6307 24.963 28.5502 24.54 29.2642C24.261 29.7367 23.7615 29.9992 23.2485 29.9992Z"
              fill="#01A657"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default PopularTourSwiper;
