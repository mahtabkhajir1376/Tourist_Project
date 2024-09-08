"use client";
import SingleComment from "./SingleComment";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CommentData } from "./SingleComment";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Comments: React.FC = () => {
  const comment: CommentData = [
    {
      userName: "کاظم میرانی",
      comment:
        "من اولین باره با تور شما سفر میکنم خیلی تجربه خوب و با خاطرات خوب برام ثبت شد عالی بود الخصوص تورلیدر که بسیار سرزنده و شاد و با حوصله بود ما تونستیم هر جایی که میخواستیم بریم و ایشون هم بهمون راهنمایی میکرد",
    },
    {
      userName: "کاظم میرانی",
      comment:
        "من اولین باره با تور شما سفر میکنم خیلی تجربه خوب و با خاطرات خوب برام ثبت شد عالی بود الخصوص تورلیدر که بسیار سرزنده و شاد و با حوصله بود ما تونستیم هر جایی که میخواستیم بریم و ایشون هم بهمون راهنمایی میکرد",
    },
    {
      userName: "کاظم میرانی",
      comment:
        "من اولین باره با تور شما سفر میکنم خیلی تجربه خوب و با خاطرات خوب برام ثبت شد عالی بود الخصوص تورلیدر که بسیار سرزنده و شاد و با حوصله بود ما تونستیم هر جایی که میخواستیم بریم و ایشون هم بهمون راهنمایی میکرد",
    },
  ];

  return (
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={5}
        grabCursor={true}
        pagination={{
          type: "fraction",
        }}
        className=" 2xl:w-[90%] sm:w-[90%] my-20 h-[300px]"
      >
        {comment.map((comment) => {
          return (
            <SwiperSlide>
              <SingleComment userName={comment.userName} comment={comment.comment} />
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
};

export default Comments;
