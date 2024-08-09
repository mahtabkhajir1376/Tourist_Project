import React from "react";

const CommentBox: React.FC = () => {
  return (
    <div className="shadow-md rounded-xl 2xl:w-[48%] sm:w-[] h-[170px] flex flex-col justify-between items-start mb-3 px-5 pt-6 pb-4 font-iransansNumber ">
        <div className="flex flex-row  justify-between items-center w-full">
          <div className="flex flex-row justify-between items-center w-[40%]">
            <h6 className=" text-sm font-demiBold">زهرا نوری</h6>
            <div className="flex flex-row w-[43%] justify-between items-center">
              <img src="/svg/commentstarempty.svg" className="w-4 h-4" alt="" />
              <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
              <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
              <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
              <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
            </div>
          </div>
          <p className="font-regular text-xs text-[#707070]">1403/02/12</p>
        </div>
        <p className="text-sm font-ultraLight leading-6 text-justify">
          تور تاریخی به یزد واقعاً ضعیف بود. برنامه‌های تفریحی جذابیت نداشت و
          زمان‌بندی‌ها هم رعایت نمی‌شد. همچنین، هماهنگی‌های مربوط به حمل و نقل
          بسیار ضعیف بود.
        </p>
        <div className="flex flex-row justify-between items-center w-full">
          <a href="" className="text-xs font-regular text-[#01A657]">مشاهده تور</a>
          <div className="flex flex-row justify-between items-center w-[18%]" >
            <img src="/svg/dashboard/trash_icon.svg" alt="" className=" cursor-pointer opacity-40 hover:opacity-100" />
            <img src="/svg/dashboard/cross_icon.svg" alt="" className=" cursor-pointer opacity-40 hover:opacity-100" />
            <img src="/svg/dashboard/accept_icon.svg" alt="" className=" cursor-pointer opacity-40 hover:opacity-100" />
          </div>
        </div>
    </div>
  );
};

export default CommentBox;
