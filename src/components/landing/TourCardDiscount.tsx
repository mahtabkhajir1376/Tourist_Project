import React from "react";
import Button from "./Button";
import Percent from "./Percent";



type Props ={
  imageSrc:string,
  tourTitle:string,
  tourLocation:string,
  primaryTourprice:number,
  discountedPrice:number,
  tourRate:number,
  tourComments:number,
  key:number
}


const TourCardDiscount: React.FC<Props> = ({imageSrc,tourTitle,tourLocation,primaryTourprice,tourComments,discountedPrice,tourRate,key}) => {


  return (      
          <div className="flex flex-col justify-between items-center px-4 " key={key}>
          <img src={imageSrc} alt=""  />
          <Button
            bgColor="bg-white"
            titleBtn="مشاهده"
            fontSize="text-[12px] font-medium"
            width="w-24 absolute bottom-[34%] left-[5%]"
            borderRadius="rounded-md"
            padding="py-2 px-8"
          />
          <Percent />
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-4 left-6"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5996 12.9806H20.5704C20.0874 12.9631 19.7083 12.5595 19.7246 12.0765C19.7619 10.967 19.2194 10.2471 18.2733 10.1503C17.7926 10.1013 17.4426 9.67197 17.4916 9.19131C17.5418 8.7118 17.9734 8.3583 18.4518 8.40964C20.3278 8.60097 21.5423 10.0978 21.4734 12.1348C21.4571 12.6085 21.0686 12.9806 20.5996 12.9806ZM20.5039 4.33097C18.4973 3.6893 15.7194 3.9553 13.9858 5.9223C12.1646 3.9693 9.48127 3.6858 7.4886 4.33214C2.9211 5.80214 1.4966 11.0941 2.79627 15.153V15.1541C4.84727 21.537 11.6664 24.9798 14.0021 24.9798C16.0869 24.9798 23.1768 21.6011 25.2044 15.153C26.5041 11.0953 25.0761 5.8033 20.5039 4.33097Z"
              fill="#FF0200"
            />
          </svg>
    
          <div className="flex flex-col justify-center items-center w-full px-5 py-3 ">
            <div className="flex flex-row justify-between items-center w-full py-2 text-base font-medium   ">
              {`مقصد : ${tourTitle}`}
              <div className="flex flex-row justify-between items-center w-[22%] text-base font-medium ">
                 {`مبدا : ${tourLocation}`}
                <img src="/svg/locationIcon.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full py-2 text-sm font-medium">
              <p className=" text-[#01A657] line-through font-iransansNumber font-medium ">
                {`قیمت قبل : ${primaryTourprice}`}
              </p>
              <div className="flex flex-row justify-between items-center w-[12%] text-lg font-medium font-iransansNumber">
                {tourComments}
                <img src="/svg/chatIcon.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full py-2 text-base font-medium font-iransansNumber  ">
             {`قیمت : ${discountedPrice}`}
              <div className="flex flex-row justify-between items-center w-[13%] text-lg font-medium ">
                {tourRate}
                <img src="/svg/starIcon.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        
      
    
  );
};

export default TourCardDiscount;
