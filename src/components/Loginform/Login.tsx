import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <img
        src="/image/LoginForm/Wave.png"
        alt="wave"
        className="absolute left-0 bottom-0 w-full h-[463px] object-cover"
      />
      
      
      <img
        src="/image/LoginForm/Logo.png" 
        alt="logo"
        className="absolute top-5 right-5 w-32 h-auto" 
      />
      
      <div className="bg-white rounded-xl shadow-lg w-[550px] h-[750px] z-10 mt-[57px] mb-[100px]">
        <div className="mb-6">
          <img
            src="/image/LoginForm/BackgroundLogin.png"
            alt="BackgroundLogin"
            className="w-[550px] h-[300px] rounded-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="w-[123px] h-[30px] font-iransansNumber font-medium text-xl leading-[30px] mt-[60px]">
            ورود و ثبت نام
          </h1>
          <h4 className="font-iransansNumber font-ultraLight w-[264px] h-[15px] text-[10px] leading-5 mt-[12px]">
            سلام! برای ورود به سفر‌جو شماره موبایل یا ایمیل خود را وارد کنید.
          </h4>
          <input
            type="text"
            placeholder="شماره موبایل"
            className="input input-bordered max-w-xs w-[380px] h-[42px] rounded-md bg-[#E8EDEC4D] font-iransansNumber text-xs leading-[18px] mt-[32px]"
          />
          <Link href={"/Loginform/ReceiveCode"}>
          <button className="btn btn-success text-white text-sm leading-5 w-[271px] h-[42px] rounded-md mt-[32px] font-iransans ">
            دریافت کد
          </button>
          </Link>
          <button className="btn btn-outline btn-success text-white text-sm  font-iransansNumber leading-5 w-[271px] h-[42px] rounded-md mt-[11px]">
            ورود با رمز عبور
          </button>
          <p className="text-[10px] text-[#000000] font-ultraLight font-iransansNumber mt-[45px]">
            ورود به سایت به معنای پذیرش قوانین است
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
