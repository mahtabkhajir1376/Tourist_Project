"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TourboardCard from "./TourboardCard";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Data } from "./PopularTourSwiper";
import { TourItem } from "./PopularTourSwiper";

const fetchTourboardSwiper = async (categories: number[]): Promise<Data[]> => {
  const response = await axios.get<Data[]>(
    "http://mohammad-mokhtari.ir/safarjoo/api/trip",
    {
      params: {
        categories,
      },
    }
  );
  return response.data;
};

const SwiperTouraboard: React.FC = () => {
  const categories = [6];

  const { data, error, isLoading } = useQuery<Data[], Error>({
    queryKey: ["fetchTourboardSwiper", categories],
    queryFn: () => fetchTourboardSwiper(categories),
  });

  const tourboardTours: TourItem[] = data?.data;

  return (
    <div className=" h-[738px] flex flex-col items-center justify-center mt-16">
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto mb-9">
        <h3 className="xl:text-[28px] font-medium sm:text-lg md:text-[22px] lg:text-[24px] 2xl:text-[28px]  ">
          تورهای خارج از کشور رو دیدی ؟
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
        {tourboardTours?.map((item, index) => {
          return (
            <SwiperSlide className="w-[30%]  my-10 mx-auto relative">
              <TourboardCard
                key={index}
                // imageSrc={item.imageSrc}
                tourTitle={item.tour_detail.title}
                tourRate={item.tour_detail.average_score}
                tourComments={item.tour_detail.comments_count}
                primaryTourprice={item.price}
                tourLocation={item.tour_detail.city.city_name}
                moredetails={item.tour_detail.description}
                discountedPrice={item.discount_price}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperTouraboard;
