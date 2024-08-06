import React from "react";
import Link from "next/link";

const SingleUser = () => {
  return (
    <div className="bg-white flex flex-row justify-between items-center 2xl:0w-[98%] md:w-[95%] lg:w-[97%] font-iransansNumber mx-auto my-6 rounded-md py-2 px-5 border-r-2 border-[#01A657]">
      <div className="flex flex-row justify-between items-center 2xl:w-[23%] md:w-[31%] lg:w-[33%]">
        <div className="avatar">
          <div className="2xl:w-12 2xl:h-12 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full">
            <img src="/image/dashboard/Profile._image.svg" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="2xl:text-base xl:text-base md:text-xs lg:text-sm font-medium">الهه علی نیا</p>
          <p className="2xl:text-xs xl:text-xs md:text-[8px] lg:text-xs font-light mt-1">تاریخ عضویت : 1403.02.16 </p>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center 2xl:w-[12%] md:w-[13%] lg:w-[17%]">
        <img src="/svg/dashboard/trash_icon.svg" alt="" className="2xl:w-6 2xl:h-6 xl:w-6 xl:h-6 md:w-3 md:h-3 lg:w-5 lg:h-5 cursor-pointer opacity-40 hover:opacity-100" />
        <img src="/svg/dashboard/Edit_icon.svg" alt="" className="2xl:w-6 2xl:h-6 xl:w-6 xl:h-6 md:w-3 md:h-3  lg:w-5 lg:h-5 cursor-pointer hover:opacity-100 opacity-80 " />
        <Link href="/dashboard/users/user_info">
        <img src="/svg/loginIcons/visibleeye.svg" alt="" className="2xl:w-6 2xl:h-6 xl:w-6 xl:h-6 md:w-3 md:h-3  lg:w-5 lg:h-5 cursor-pointer hover:opacity-100 opacity-80" />
        </Link>
      </div>
    </div>
  );
};

export default SingleUser;
