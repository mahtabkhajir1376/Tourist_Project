import React from "react";
import Link from "next/link";

const CommentBox: React.FC = () => {
  return (
    <div className="shadow-md rounded-xl 2xl:w-[47%] md:w-full lg:w-[49%] 2xl:h-[203px] lg:h-40 xl:h-48 md:h-32  flex flex-col justify-between items-start mb-4 px-5 pt-6 pb-4 font-iransansNumber ">
        <div className="flex flex-row  justify-between items-center w-full">
          <div className="flex flex-row justify-between items-center 2xl:w-[40%] md:w-[20%] lg:w-[35%]">
            <h6 className=" 2xl:text-sm md:text-[10px] lg:text-xs xl:text-sm font-demiBold">زهرا نوری</h6>
            <div className="flex flex-row 2xl:w-[43%] md:w-[30%] lg:w-[48%] justify-between items-center">
              <img src="/svg/commentstarempty.svg" className="2xlw-4 2xl:h-4 md:w-2 md:h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4" alt="" />
              <img src="/svg/commentstarfill.svg" alt="" className="2xlw-4 2xl:h-4 md:w-2 md:h-2 lg:w-3 lg:h-3  xl:w-4 xl:h-4" />
              <img src="/svg/commentstarfill.svg" alt="" className="2xlw-4 2xl:h-4 md:w-2 md:h-2 lg:w-3 lg:h-3  xl:w-4 xl:h-4" />
              <img src="/svg/commentstarfill.svg" alt="" className="2xlw-4 2xl:h-4 md:w-2 md:h-2 lg:w-3 lg:h-3  xl:w-4 xl:h-4" />
              <img src="/svg/commentstarfill.svg" alt="" className="2xlw-4 2xl:h-4 md:w-2 md:h-2 lg:w-3 lg:h-3  xl:w-4 xl:h-4" />
            </div>
          </div>
          <p className="font-regular 2xl:text-xs md:text-[8px] lg:text-[10px] text-[#707070] xl:text-xs">1403/02/12</p>
        </div>
        <p className="2xl:text-sm md:text-[8px] lg:text-xs xl:text-sm  font-ultraLight leading-6 lg:leading-6 text-justify">
          تور تاریخی به یزد واقعاً ضعیف بود. برنامه‌های تفریحی جذابیت نداشت و
          زمان‌بندی‌ها هم رعایت نمی‌شد. همچنین، هماهنگی‌های مربوط به حمل و نقل
          بسیار ضعیف بود.
        </p>
        <div className="flex flex-row justify-between items-center w-full">
          <Link href="/dashboard/comments/tourinfo" className="2xl:text-xs md:text-[8px] lg:text-[10px] xl:text-xs font-regular text-[#01A657]">مشاهده تور</Link>
          <div className="flex flex-row justify-between items-center 2xl:w-[18%] md:w-[12%] lg:w-[18%] xl:w-[18%]" >
            <img src="/svg/dashboard/trash_icon.svg" alt="" className="2xl:w-6 2xl:h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 cursor-pointer opacity-40 hover:opacity-100" />
            <img src="/svg/dashboard/cross_icon.svg" alt="" className=" 2xl:w-6 2xl:h-6 md:w-4 md:h-4  lg:w-5 lg:h-5  xl:w-6 xl:h-6 cursor-pointer opacity-40 hover:opacity-100" />
            <img src="/svg/dashboard/accept_icon.svg" alt="" className=" 2xl:w-6 2xl:h-6 md:w-4 md:h-4  lg:w-5 lg:h-5  xl:w-6 xl:h-6 cursor-pointer opacity-40 hover:opacity-100" />
          </div>
        </div>
    </div>
  );
};

export default CommentBox;
