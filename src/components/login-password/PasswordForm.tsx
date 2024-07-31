import React from 'react'

const PasswordForm=()=> {
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
        className="absolute top-5 right-5 w-32 h-auto" 
      />
      
      <div className="bg-white rounded-xl shadow-lg w-[550px] h-[750px] z-10 mt-14 mb-[100px] flex flex-col items-center justify-center">
          <img
            src="/image/LoginForm/BackgroundLogin1.png"
            alt="BackgroundLogin"
            className="w-[550px] h-[300px] rounded-md mb-6"
          />
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-[50%]  font-iransansNumber font-medium text-xl">
            ورود با رمز عبور
          </h1>
          <h4 className="font-iransansNumber font-ultraLight w-[264px] h-[15px] text-[10px] leading-5 mt-[12px]">
            سلام! برای ورود به سفر‌جو شماره موبایل یا ایمیل خود را وارد کنید.
          </h4>
          <input
            type="text"
            placeholder="شماره موبایل"
            className="input  max-w-xs w-full h-[42px] rounded-md bg-[#E8EDEC4D]  text-xs  mt-[32px]"
          />
          <input
            type="text"
            placeholder="رمز عبور"
            className="input  max-w-xs w-full h-[42px] rounded-md bg-[#E8EDEC4D]  text-xs l mt-[32px]"
          />
          <button className="btn btn-success text-white text-sm leading-5 w-[271px] h-[42px] rounded-md mt-[32px]">
          ورود با رمز عبور
          </button>
          <div className='flex flex-row justify-between items-center font-medium text-xs text-[#01A657] w-full mt-5
          '>
            <a href="">فراموشی رمز</a>
            <a href="">ورود با رمز یکبار مصرف</a>
          </div>
          <p className="text-[10px] text-[#000000] font-ultraLight font-iransansNumber mt-[45px]">
            ورود به سایت به معنای پذیرش قوانین است
          </p>
        </div>
      </div>
    </div>
  )
}

export default PasswordForm