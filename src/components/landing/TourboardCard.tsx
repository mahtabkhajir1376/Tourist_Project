import React from "react";
import Button from "./Button";
import Link from "next/link";
import HeartCheckbox from "../showlist/LikeCheckBox";
import { CgMathPercent } from "react-icons/cg";

type Props = {
  imageSrc?: string;
  tourTitle: string;
  tourLocation: string;
  primaryTourprice: string;
  tourRate?: number | null;
  tourComments?: number | null;
  key: number;
  moredetails?: string;
  discountedPrice: string | null;
};

const TourboardCard: React.FC<Props> = ({
  imageSrc,
  tourTitle,
  tourLocation,
  primaryTourprice,
  moredetails,
  tourRate,
  tourComments,
  key,
  discountedPrice,
}) => {
  return (
    <div
      className="flex flex-col justify-between items-center xl:px-4 sm:px-1 "
      key={key}
    >
      <img src="/image/Imagecard2.svg" alt="" />
      <Link href={"/detailspage"}>
        <Button
          bgColor="bg-[#DDFFF8]"
          titleBtn="رزرو"
          fontSize="xl:text-[12px]  sm:text-[8px] md:text-[10px] lg:text-xs font-medium"
          width="xl:w-24 absolute xl:bottom-[42%] xl:left-[6%] sm:bottom-[59%] sm:left-[5%] md:bottom-[56%] lg:bottom-[50%] xl:bottom-[48%] 2xl:bottom-[44%]"
          borderRadius="rounded-md"
          padding="xl:py-2 xl:px-8 sm:px-3 sm:py-1 lg:py-2 lg:px-6 "
        />
      </Link>

      <HeartCheckbox position="absolute xl:top-4 xl:left-7  sm:top-2 sm:left-3 sm:w-5 lg:w-7 lg:top-3 lg:left-4" />

      <div className="flex flex-col justify-center items-center w-full xl:px-5 xl:py-3 md:px-1 lg:px-1 font-iransansNumber ">
        <div className="flex flex-row justify-between items-center w-full py-2 xl:text-base sm:text-[10px] md:text-xs lg:text-sm font-medium">
          {tourTitle}
          <div className="flex flex-row justify-end items-center 2xl:w-[30%] xl:w-[28%] sm:w-[32%] md:w-[32%] lg:w-[28%] xl:text-base sm:text-[10px] md:text-xs lg:text-sm font-medium ">
            مبدا : تهران
            <img
              src="/svg/locationIcon.svg"
              className="sm:w-4 md:w-5 mr-2"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full py-2 xl:text-base sm:text-[8px] md:text-[10px] lg:text-xs  font-medium">
          <p className= {` font-iransansNumber font-medium text-sm  ${discountedPrice ? "line-through": null} `} >
            {`قیمت  : ${primaryTourprice} تومان`}
          </p>
          {discountedPrice ? (
            <p className="font-iransansNumber font-medium text-[#01A657]  text-sm flex flex-row justify-center items-center ml-12">
              <CgMathPercent className="text-[#01A657] text-base ml-1" />
              {`قیمت با تخفیف: ${discountedPrice}`}
            </p>
          ) : (
            <p></p>
          )}

          <div className="flex flex-row justify-between items-center xl:w-[14%] sm:w-[22%] md:w-[22%] lg:w-[18%] xl:text-lg sm:text-[10px] md:text-xs lg:text-sm font-medium font-iransansNumber">
            {tourComments ? <p>{tourComments}</p> : <p>0</p>}
            <img
              src="/svg/chatIcon.svg"
              alt=""
              className="sm:w-4 md:w-5 lg:w-6"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center xl:w-full sm:w-full py-2 xl:text-base sm:text-[10px] md:text-xs lg:text-sm font-medium font-iransansNumber  ">
          {`جزئیات بیشتر : ${moredetails}`}
          <div className="flex flex-row justify-between items-center xl:w-[14%] sm:w-[23%] md:w-[23%] lg:w-[18%] xl:text-lg sm:text-[10px] md:text-xs lg:text-sm font-medium ">
            {tourRate ? <p>{tourRate}</p> : <p>0</p>}
            <img
              src="/svg/starIcon.svg"
              alt=""
              className="sm:w-4 md:w-5 lg:w-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourboardCard;
