import React from "react";
import Button from "./Button";
import Link from "next/link";

type Props = {
  imageSrc: string;
  tourTitle: string;
  tourLocation: string;
  Tourprice: number;
  tourRate: number;
  tourComments: number;
  key: number;
  moredetails:string
};

const TourboardCard: React.FC<Props> = ({
  imageSrc,
  tourTitle,
  tourLocation,
  Tourprice,
  moredetails,
  tourRate,
  tourComments,
  key,
}) => {
  return (
    <div
      className="flex flex-col justify-between items-center xl:px-4 sm:px-1 "
      key={key}
    >
      <img src={imageSrc} alt="" />
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
      <svg
        width="28"
        height="29"
        viewBox="0 0 28 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute xl:top-4 xl:left-6  sm:top-2 sm:left-3 sm:w-5 lg:w-7 lg:top-3 lg:left-4 "
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.5996 12.9806H20.5704C20.0874 12.9631 19.7083 12.5595 19.7246 12.0765C19.7619 10.967 19.2194 10.2471 18.2733 10.1503C17.7926 10.1013 17.4426 9.67197 17.4916 9.19131C17.5418 8.7118 17.9734 8.3583 18.4518 8.40964C20.3278 8.60097 21.5423 10.0978 21.4734 12.1348C21.4571 12.6085 21.0686 12.9806 20.5996 12.9806ZM20.5039 4.33097C18.4973 3.6893 15.7194 3.9553 13.9858 5.9223C12.1646 3.9693 9.48127 3.6858 7.4886 4.33214C2.9211 5.80214 1.4966 11.0941 2.79627 15.153V15.1541C4.84727 21.537 11.6664 24.9798 14.0021 24.9798C16.0869 24.9798 23.1768 21.6011 25.2044 15.153C26.5041 11.0953 25.0761 5.8033 20.5039 4.33097Z"
          fill="#FF0200"
        />
      </svg>

      <div className="flex flex-col justify-center items-center w-full xl:px-5 xl:py-3 md:px-1 lg:px-1 font-iransansNumber ">
        <div className="flex flex-row justify-between items-center w-full py-2 xl:text-base sm:text-[10px] md:text-xs lg:text-sm font-medium">
          {`مقصد : ${tourTitle}`}
          <div className="flex flex-row justify-between items-center xl:w-[28%] sm:w-[32%] md:w-[32%] lg:w-[28%] xl:text-base sm:text-[10px] md:text-xs lg:text-sm font-medium ">
            {`مبدا : ${tourLocation}`}
            <img src="/svg/locationIcon.svg" className="sm:w-4 md:w-5" alt="" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full py-2 xl:text-base sm:text-[8px] md:text-[10px] lg:text-xs  font-medium">
          <p className="  font-iransansNumber font-medium ">
            {`قیمت : ${Tourprice}`}
          </p>
          <div className="flex flex-row justify-between items-center xl:w-[17%] sm:w-[22%] md:w-[22%] lg:w-[18%] xl:text-lg sm:text-[10px] md:text-xs lg:text-sm font-medium font-iransansNumber">
            {tourComments}
            <img
              src="/svg/chatIcon.svg"
              alt=""
              className="sm:w-4 md:w-5 lg:w-6"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center xl:w-full sm:w-full py-2 xl:text-base sm:text-[10px] md:text-xs lg:text-sm font-medium font-iransansNumber  ">
          {`جزئیات بیشتر : ${moredetails}`}
          <div className="flex flex-row justify-between items-center xl:w-[17%] sm:w-[23%] md:w-[23%] lg:w-[18%] xl:text-lg sm:text-[10px] md:text-xs lg:text-sm font-medium ">
            {tourRate}
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
