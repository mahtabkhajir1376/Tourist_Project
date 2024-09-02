"use client"
import React from 'react';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center px-4 md:px-8 lg:px-16">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-2xl md:text-3xl font-medium text-[#01A657] mb-6">
          درخواست شما با موفقیت ثبت شد
        </h1>
        <ul className="text-[#707070] text-xs md:text-sm leading-6 md:leading-8 font-regular">
          <li>بررسی میزان مبلغی که باید برای شما واریز شود، با توجه به زمان لغو بلیت.</li>
          <li>۹۰٪ یا ۵۰٪ مبلغ بلیت بسته به زمان لغو تعیین خواهد شد.</li>
          <li>۱۰ الی ۴۸ ساعت آینده وجه استرداد واریز خواهد شد.</li>
          <li className="mt-5">سفرجوی عزیز از صبر و متانت شما سپاسگزاریم.</li>
        </ul>
      </div>
      <div className="flex justify-center my-10">
        <img
          src="/image/Sucsesspage/Sucsess.svg" 
          alt="Success"
          className="w-48 h-48 md:w-64 md:h-64"
        />
      </div>
      <div className="mb-10">
        <button className="bg-[#01A657] w-[300px] max-w-[300px] h-[42px] rounded-md text-white flex justify-center items-center">
          مشاهده وضعیت
        </button>
      </div>
    </div>
  );
};

export default Success;
