'use client'
import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"; 


const CardSlider = [ 
 
  { 
    destination:'مقصد:کشور تایلند', 
    origin: ' مبدا : تهران', 
    price: 'قیمت :4.258.000 تومان ', 
    commnet: '136', 
    moredetails : 'جزیات بیشتر : 5 روزه /جاذبه های گردشگری تایلند', 
    amountofsatisfaction : '4.41', 
    src: '/image/Thailand.png', 
     
  }, 
  { 
    destination:'مقصد:کشور سوئیس', 
    origin: ' مبدا : تهران', 
    price: 'قیمت :8.258.000 تومان ', 
    commnet: '136', 
    moredetails : 'جزیات بیشتر : 10 روزه /جاذبه های گردشگری سوئیس', 
    amountofsatisfaction : '4.41', 
    src: '/image/Switzerland.png', 
     
  }, 
  { 
    destination:'مقصد:کشور امریکا', 
    origin: ' مبدا : تهران', 
    price: 'قیمت :4.258.000 تومان ', 
    commnet: '136', 
    moredetails : 'جزیات بیشتر : 5 روزه /آبشار نیاگارا و...', 
    amountofsatisfaction : '4.41', 
    src: '/image/Niagara Falls.png', 
     
  },
  { 
    destination:'مقصد:کشور امریکا', 
    origin: ' مبدا : تهران', 
    price: 'قیمت :4.258.000 تومان ', 
    commnet: '136', 
    moredetails : 'جزیات بیشتر : 5 روزه /آبشار نیاگارا و...', 
    amountofsatisfaction : '4.41', 
    src: '/image/greanmountain.png', 
     
  }, 
  { 
    destination:'مقصد:کشور امریکا', 
    origin: ' مبدا : تهران', 
    price: 'قیمت :4.258.000 تومان ', 
    commnet: '136', 
    moredetails : 'جزیات بیشتر : 5 روزه /آبشار نیاگارا و...', 
    amountofsatisfaction : '4.41', 
    src: '/image/gradiantsky.png', 
     
  }, 
  

]; 

function SwiperTourabroad() {
  return (
    <>
      <div className="flex flex-row justify-between m-16">
        <div className="">
          <p className="font-medium leading-10 text-3xl">تورهای خارج از کشور رو دیدی ؟</p>
        </div>
        <div className="flex flex-row w-[148px] h-[28px] top-[18px] left-[77px] p-3 ">
          <a href="#" className="text-[#01A657] font-normal text-lg leading-7 w-[106px] h-[27px]">مشاهده بیشتر</a>
          <img src="/svg/IconNextinSwiper.png" alt="" className="w-[28px] h-[28px]" />
        </div>
      </div>

      <div className="flex flex-row justify-center w-[90%] mx-auto my-0 ">
      <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={2.5}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {CardSlider.map((card, index) => (
            <SwiperSlide key={index}  className=" flex flex-col justify-center items-center relative">
              <img src={card.src} alt="Destination" className=" " />
               
              <div className="flex justify-between px-5 py-3 ">
              <div className="text-base font-medium leading-6  ">
                <p>{card.destination}</p>
                <p>{card.price}</p>
                <p>{card.moredetails}</p>
              </div>
                <div className="flex flex-col justify-center ">
                    <div className="flex flex-row justify-between gap-1 ">
                   <p>{card.origin}</p>
                   <img src="/image/Location.icon.png" alt="" className="w-[24px] h-[24px]" />
                   </div>
                   <div className="flex flex-row pr-8 gap-2">
                   <p>
                     {card.commnet}</p>
                     <img src="/image/comment.png" alt="" className="w-[24px] h-[24px]" />
                    </div>
                    <div className="flex flex-row pr-8 gap-1 ">
                   <p>
                    {card.amountofsatisfaction}</p>
                    <img src="/image/star.png" alt="" className="w-[24px] h-[24px]" />                     
                    </div>              
                    </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperTourabroad;
