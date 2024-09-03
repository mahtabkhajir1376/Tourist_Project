"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TourCardDiscount from "./TourCardDiscount";
import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Data } from "./PopularTourSwiper";
import { TourItem } from "./PopularTourSwiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



const fetchSpecialdiscount = async (discount_only: boolean): Promise<Data[]> => {
  const response = await axios.get<Data[]>(
    "http://mohammad-mokhtari.ir/safarjoo/api/trip",
    {
      params: {
        discount_only,
      },
    }
  );
  return response.data;
};







const SpecialdiscountSwiper: React.FC = () => {

  const discount_only = true;

  const { data, error, isLoading } = useQuery<Data[], Error>({
    queryKey: ["fetchSpecialdiscount", discount_only],
    queryFn: () => fetchSpecialdiscount(discount_only),
  });


  const SpecialdiscountTours:TourItem[] = data?.data;


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
        {SpecialdiscountTours?.map((item, index) => {
          return (
            <SwiperSlide className="w-[30%]  my-10 mx-auto relative">
              <TourCardDiscount
                key={index}
                // imageSrc={item.imageSrc}
                tourTitle={item.tour_detail.title}
                tourRate={item.tour_detail.average_score}
                tourComments={item.tour_detail.comments_count}
                discountedPrice={item.discount_price}
                primaryTourprice={item.price}
                tourLocation={item.tour_detail.city.city_name}
                moreDetail={item.tour_detail.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SpecialdiscountSwiper;
