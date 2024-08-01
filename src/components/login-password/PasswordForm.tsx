import Link from "next/link";
import React from "react";

const PasswordForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative font-iransansNumber">
      <img
        src="/image/LoginForm/Wave.png"
        alt="wave"
        className="absolute left-0 bottom-0 w-full h-[463px] object-cover"
      />

      <img
        src="/image/LoginForm/Logo.png"
        alt="logo"
        className="absolute top-5 right-5 2xl:w-32 sm:w-20 h-auto"
      />

      <div className=" bg-white rounded-xl shadow-lg shadow-[#E3EbE9] 2xl:w-[36%] sm:w-[50%]  2xl:h-[600px]  z-10 mt-24 mb-14 flex flex-col items-center justify-center">
        <img
          src="/image/LoginForm/BackgroundLogin1.png"
          alt="BackgroundLogin"
          className="2xl:w-full sm:w-full h-full rounded-md mb-6"
        />
        <div className="flex flex-col items-center justify-center w-full py-2 bg-white rounded-b-lg">
          <h1 className="  font-iransansNumber font-medium 2xl:text-xl sm:text-sm md:text-base">
            ورود با رمز عبور
          </h1>
          <h4 className="font-iransansNumber font-ultraLight 2xl:text-[10px] sm:text-[8px] md:text-[10px] mt-[12px]">
            سلام! برای ورود به سفر‌جو شماره موبایل یا ایمیل خود را وارد کنید.
          </h4>
          <input
            type="text"
            placeholder="شماره موبایل"
            className="input  max-w-xs w-full sm:w-1/2 md:w-[70%] h-[42px] rounded-md bg-[#E8EDEC4D]  2xl:text-xs sm:text-[8px] md:text-[10px]  mt-[32px]"
          />
          <label className="input input-ghost flex items-center gap-2 bg-[#E8EDEC4D] mt-[32px]  w-full max-w-xs sm:w-1/2 h-[42px] md:w-[70%] rounded-md  ">
            <input
              type="password"
              className="grow max-w-xs rounded-md   sm:text-[8px] md:text-[10px]  2xl:text-xs bg-[#E8EDEC4D] "
              placeholder="رمز عبور"
            />
            <img src="/svg/visibleeye.svg" alt="" />
          </label>
          <Link href="" className="2xl:w-[50%] sm:w-[70%]  mt-[32px]">
          <button className="btn btn-success text-white 2xl:text-sm md:text-[10px] lg:text-xs xl:text-sm  w-full  sm:text-[8px]  rounded-md ">
            ورود با رمز عبور
          </button>
          </Link>
          <div
            className="flex flex-row justify-between items-center font-medium 2xl:text-xs sm:text-[8px]  text-[#01A657] w-[50%] mt-5 
          "
          >
            <Link href="/login-password/change-password">
              فراموشی رمز
            </Link>
            <Link href="/Loginform/">
              ورود با رمز یکبار مصرف
            </Link>
          </div>
          <p className="2xl:text-[10px] sm:text-[8px] text-[#000000] font-ultraLight mt-4  md:text-[10px] py-2 ">
            ورود به سایت به معنای پذیرش قوانین است
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
