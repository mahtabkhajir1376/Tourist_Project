"use client"
import React from 'react';
import Link from 'next/link';

const Info: React.FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-center md:justify-start">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-6 md:mt-[6%]">
            <div className="flex flex-col gap-3">
              <label htmlFor="accountNumber" className="text-[#01A657] font-iransansNumber text-sm">
                شماره شبا
              </label>
              <input
                id="accountNumber"
                type="text"
                placeholder=""
                className="rounded w-full md:w-[390px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="cardNumber" className="text-[#01A657] font-iransansNumber text-sm">
                شماره کارت
              </label>
              <input
                id="cardNumber"
                type="text"
                placeholder=""
                className="rounded w-full md:w-[390px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="text-[#707070] text-xs font-light leading-8 mt-4">
            <p>
              چنانچه پیش از این در بخش حساب کاربری اطلاعات بانکی خود را ثبت کرده‌اید، اینجا به شما نشان داده می‌شود.
              <br />
              چنانچه شماره کارت مورد نظر مورد تایید است ادامه دهید، اما اگر مایل به اضافه کردن شماره کارت و شبای دیگری هستید لطفا ویرایش کنید.
              <br />
              اگر قبلا در بخش حساب کاربری اطلاعات را وارد نکرده‌اید، هم اکنون می‌توانید یکی از موارد بالا را پر کنید تا وجه شما استرداد شود.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-10 md:pt-56">
        <Link href="/Ticketrefund/Sucess" className="bg-[#01A657] w-full max-w-[300px] h-[42px] rounded-md text-white flex justify-center items-center">
          تمام
        </Link>
      </div>
    </div>
  );
};

export default Info;
