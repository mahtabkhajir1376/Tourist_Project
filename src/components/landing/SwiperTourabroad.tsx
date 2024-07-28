'use client'
import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"; 
import TourboardCard from "./TourboardCard";
import Link from "next/link";


const CardSlider = [ 
 
  { 
    tourTitle:'کشور تایلند', 
    origin: 'تهران', 
    Tourprice: 4.258, 
    tourComments: 136, 
    moredetails : '5 روزه /جاذبه های گردشگری تایلند', 
    tourRate : 4.41, 
    imageSrc: '/image/Imagecard2.svg', 
     
  }, 
  { 
    tourTitle:'کشور سوئیس', 
    origin: 'تهران', 
    Tourprice: 8.258, 
    tourComments: 136, 
    moredetails : '10 روزه /جاذبه های گردشگری سوئیس', 
    tourRate : 4.41, 
    imageSrc: '/image/Imagecard2.svg', 
     
  }, 
  { 
    tourTitle:'کشور امریکا', 
    origin: 'تهران', 
    Tourprice: 4.258, 
    tourComments: 136, 
    moredetails : ' 5 روزه /آبشار نیاگارا و',
    tourRate : 4.41, 
    imageSrc: '/image/Imagecard2.svg', 
     
  },
  { 
    tourTitle:'کشور امریکا', 
    origin: 'تهران', 
    Tourprice: 4.258, 
    tourComments: 136, 
    moredetails : '5 روزه /آبشار نیاگارا و', 
    tourRate : 4.41, 
    imageSrc: '/image/Imagecard2.svg', 
     
  }, 
  { 
    tourTitle:'کشور امریکا', 
    origin: 'تهران', 
    Tourprice: 4.258, 
    tourComments: 136, 
    moredetails : '5 روزه /آبشار نیاگارا و', 
    tourRate : 4.41, 
    imageSrc: '/image/Imagecard2.svg', 
     
  }, 
  

]; 

const SwiperTouraboard: React.FC = () => {
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
        {CardSlider.map((item, index) => {
          return (
            <SwiperSlide className="w-[30%]  my-10 mx-auto relative">
              <TourboardCard
                key={index}
                imageSrc={item.imageSrc}
                tourTitle={item.tourTitle}
                tourRate={item.tourRate}
                tourComments={item.tourComments}
                Tourprice={item.Tourprice}
                tourLocation={item.origin}
                moredetails={item.moredetails}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperTouraboard;
