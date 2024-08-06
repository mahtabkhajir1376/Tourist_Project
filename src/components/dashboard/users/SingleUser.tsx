import React from "react";
import Link from "next/link";

const SingleUser = () => {
  return (
    <div className="bg-white flex flex-row justify-between items-center w-[98%] font-iransansNumber mx-auto my-6 rounded-md py-2 px-5 border-r-2 border-[#01A657]">
      <div className="flex flex-row justify-between items-center w-[23%]">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full">
            <img src="/image/dashboard/Profile._image.svg" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-medium">الهه علی نیا</p>
          <p className="text-xs font-light mt-1">تاریخ عضویت : 1403.02.16 </p>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center w-[12%]">
        <img src="/svg/dashboard/trash_icon.svg" alt="" className="w-6 h-6 cursor-pointer opacity-40 hover:opacity-100" />
        <img src="/svg/dashboard/Edit_icon.svg" alt="" className="w-6 h-6 cursor-pointer hover:opacity-100 opacity-80 " />
        <Link href="/dashboard/users/user_info">
        <img src="/svg/loginIcons/visibleeye.svg" alt="" className="w-6 h-6 cursor-pointer hover:opacity-100 opacity-80" />
        </Link>
      </div>
    </div>
  );
};

export default SingleUser;
