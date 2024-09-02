import React from "react";
import Button from "./Button";
import Link from "next/link";
import HeartCheckbox from "../showlist/LikeCheckBox";

type Props ={
  imageSrc?:string | null
  tourTitle:string,
  tourLocation:string,
  primaryTourprice:string 
  discountedPrice:string | null
  tourRate?:number | null
  tourComments?:number | null
  key:number
}


const TourCardDiscount: React.FC<Props> = ({imageSrc,tourTitle,tourLocation,primaryTourprice,tourComments,discountedPrice,tourRate,key}) => {


  return (      
          <div className="flex flex-col justify-between items-center xl:px-4 sm:px-1  " key={key}>
          <img src="/image/Imagecard2.svg" alt="" className="z-0 relative"   />
          <Link href={"/detailspage"}>
          <Button
            bgColor="bg-[#E8FCFF]"
            titleBtn="مشاهده"
            fontSize="xl:text-[12px] sm:text-[8px] md:text-[10px] lg:text-xs font-medium"
            width="xl:w-24 absolute xl:bottom-[42%] xl:left-[6%] sm:bottom-[45%] sm:left-[5%] md:bottom-[43%] lg:bottom-[38%] xl:bottom-[34%] 2xl:bottom-[35%]"
            borderRadius="rounded-md"
            padding="xl:py-2 xl:px-8 sm:px-3 sm:py-1 lg:py-2 lg:px-6 "
          />
          </Link>
  
          <HeartCheckbox position=" absolute  xl:top-3 xl:left-7  sm:top-2 sm:left-3 sm:w-5 lg:w-7 lg:top-3 lg:left-4 z-10" />
    
          <div className="flex flex-col justify-center items-center w-full xl:px-5 xl:py-3 md:px-1 lg:px-1  ">
            <div className="flex flex-row justify-between items-center w-full py-2 xl:text-base sm:text-[10px] md:text-xs lg:text-sm font-medium">
              {`مقصد : ${tourTitle}`}
              <div className="flex flex-row justify-end items-center 2xl:w-[30%] xl:w-[28%] sm:w-[32%] md:w-[32%] lg:w-[28%] xl:text-base sm:text-[10px] md:text-xs lg:text-sm font-medium ">
                 {`مبدا : ${tourLocation}`}
                <img src="/svg/locationIcon.svg" className="sm:w-4 md:w-5 mr-2" alt="" />
              </div> 
            </div>
            <div className="flex flex-row justify-between items-center w-full py-2 xl:text-sm sm:text-[8px] md:text-[10px] lg:text-xs  font-medium">
              {
                discountedPrice ?   <p className=" text-[#01A657] line-through font-iransansNumber font-medium ">
                {`قیمت قبل : ${discountedPrice} تومان`}
              </p> : <p></p>
              }
            
              <div className="flex flex-row justify-between items-center xl:w-[17%] sm:w-[22%] md:w-[22%] lg:w-[18%] xl:text-lg sm:text-[10px] md:text-xs lg:text-sm font-medium font-iransansNumber">
                136
                <img src="/svg/chatIcon.svg" alt=""className="sm:w-4 md:w-5 lg:w-6" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center xl:w-full sm:w-full py-2 xl:text-base sm:text-[10px] md:text-xs lg:text-sm font-medium font-iransansNumber  ">
             {`قیمت : ${primaryTourprice} تومان`}
              <div className="flex flex-row justify-between items-center xl:w-[17%] sm:w-[23%] md:w-[23%] lg:w-[18%] xl:text-lg sm:text-[10px] md:text-xs lg:text-sm font-medium ">
                4.41
                <img src="/svg/starIcon.svg" alt="" className="sm:w-4 md:w-5 lg:w-6" />
              </div>
            </div>
          </div>
        </div>
        
      
    
  );
};

export default TourCardDiscount;
