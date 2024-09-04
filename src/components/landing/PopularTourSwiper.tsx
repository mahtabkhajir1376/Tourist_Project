"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularTour from "./PopularTour";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";



export type Data = {
  data:TourItem [];
  links: {};
  meta: {};
};

export type TourItem = {
  id: number;
  tour_detail: {
    id: number;
    title: string;
    description: string;
    transport: string;
    city_id: string;
    stay_class: string;
    average_score : null | number
    comments_count:null | number
    details: {
      services: string;
      stay_details: string;
      documents: string;
      rules: string;
    };

    categories: [
      {
        id: number;
        title: string;
      }
    ];
    city: {
      id: number;
      city_name: string;
    };
    main_image: [];
    additional_images: [];
    tour_journey: [];
  };
  price: string;
  discount_price: string | null;
  capacity: string;
  start_at: string;
  end_at: string;
  meal: number;
  recommended: string;
  popular: string;
};

type DataDiscount = Data[];



const fetchPopularTour = async (popular: boolean): Promise<Data[]> => {
  const response = await axios.get<Data[]>(
    "http://mohammad-mokhtari.ir/safarjoo/api/trip",
    {
      params: {
        popular,
      },
    }
  );
  return response.data;
};

const SpecialdiscountSwiper: React.FC = () => {
  const popular = true;

  const { data, error, isLoading } = useQuery<Data[], Error>({
    queryKey: ["fetchPopularTour", popular],
    queryFn: () => fetchPopularTour(popular),
  });


  const popularToursArray:TourItem[] = data?.data;

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
        {popularToursArray?.map((item, index) => {
          return (
            <SwiperSlide className="w-[30%] h-[473px] my-10 mx-auto relative">
              <PopularTour
                key={index}
                // imageSrc={item.tour_detail.main_image[0]}
                id={item.id}
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
    </>
  );
};

export default SpecialdiscountSwiper;
