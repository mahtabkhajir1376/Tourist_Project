import Link from "next/link";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative font-iransansNumber">
      <img
        src="/image/LoginForm/Wave.png"
        alt="wave"
        className="absolute left-0 bottom-0 w-full h-[463px] object-cover "
      />

      <img
        src="/image/LoginForm/Logo.png"
        alt="logo"
        className="absolute top-5 right-5 2xl:w-32 sm:w-20 h-auto"
      />

      <div className=" bg-white rounded-xl shadow-lg shadow-[#E3EbE9] 2xl:w-[36%] sm:w-[50%]  2xl:h-[600px]  z-10 my-12 flex flex-col items-center  justify-between">
        <img
          src="/image/LoginForm/BackgroundLogin1.png"
          alt="BackgroundLogin"
          className="2xl:w-full sm:w-full h-[47.5%] rounded-md mb-6"
        />
        <div className="flex flex-col items-center justify-center w-full py-2 bg-white rounded-b-lg">
          <h1 className="  font-iransansNumber font-medium 2xl:text-xl sm:text-sm md:text-base">
            ورود با رمز عبور
          </h1>
          <h4 className="font-iransansNumber font-ultraLight 2xl:text-[10px] sm:text-[8px] md:text-[10px] mt-[12px]">
          حالا میتونی رمز عبور جدید بذاری
          </h4>
          <label className="input input-ghost flex items-center gap-2 bg-[#E8EDEC4D] mt-[32px]  w-full max-w-xs sm:w-1/2 h-[42px] md:w-[70%] rounded-md  ">
            <input
              type="password"
              className="grow max-w-xs rounded-md   sm:text-[8px] md:text-[10px]  2xl:text-xs bg-[#E8EDEC4D] "
              placeholder="رمز عبور جدید"
            />
            <img src="/svg/visibleeye.svg" alt="" />
          </label>
          <label className="input input-ghost flex items-center gap-2 bg-[#E8EDEC4D] mt-[32px]  w-full max-w-xs sm:w-1/2 h-[42px] md:w-[70%] rounded-md  ">
            <input
              type="password"
              className="grow max-w-xs rounded-md   sm:text-[8px] md:text-[10px]  2xl:text-xs bg-[#E8EDEC4D] "
              placeholder="تکرار رمز عبور جدید"
            />
            <img src="/svg/visibleeye.svg" alt="" />
          </label>
          <Link
            href="/login-password/change-password"
            className="2xl:w-[50%] sm:w-[30%]  mt-[32px] py-4"
          >
            <button className="btn btn-success text-white 2xl:text-sm md:text-[10px] lg:text-xs xl:text-sm  w-full  sm:text-[8px]  rounded-md ">
                تغییر رمز عبور
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
