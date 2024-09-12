"use client";
import SingleComment from "./SingleComment";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Comments: React.FC = ({ tourData }) => {
  
  const comments = tourData?.tour_detail.comments;

  console.log(comments);


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
      {comments?.map((comment) => {
        return (
          <SwiperSlide>
            {comment.visibility === "approved" ? (
              <SingleComment
                key={comment.id}
                userName={comment.user_id}
                comment={comment.text}
              />
            ) : null}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Comments;
