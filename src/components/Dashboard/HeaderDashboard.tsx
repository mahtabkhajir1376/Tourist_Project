import React from 'react';
import { DateObject } from 'react-multi-date-picker';
import { format } from 'date-fns';

export default function HeaderDashboard() {

  const now = new Date();


  const persianDate = new DateObject({ date: now, calendar: "persian" }).format("YYYY/MM/DD");

  const formattedTime = format(now, 'HH:mm');

  return (
    <div className='flex flex-row items-center justify-between w-[88.5%]  h-[56px]  mx-auto my-4'>
      <div className="relative w-[870px] h-[50px] bg-white overflow-hidden rounded-xl">
        <div className="absolute top-0 left-0 w-[330px] h-[184px] bg-cover bg-left">
          <img src="/image/Dashboard/BackgroundPanelTittle2.png" alt="Background 1" />
        </div>

        <div className="absolute top-0 right-0 w-[350px] h-[184px] bg-cover bg-right">
          <img src="/image/Dashboard/BackgroundPanelTittle1.png" alt="Background 2" />
        </div>

        <div className="relative flex items-center justify-center w-full h-full">
          <p className="font-regular text-sm text-center text-gray-800">
            به پنل مدیریت سفرجو خوش آمدید ، امروز
            <span className='text-[#7B4794]'> {persianDate} </span>
            و ساعت
            <span className='text-[#7B4794]'> {formattedTime} </span>
            می‌باشد.
          </p>
        </div>
      </div>

      <div className="flex items-center  bg-white w-[150px] h-[50px] rounded-xl mr-[30px]">
        <p className="font-regular text-sm ml-4 p-3">شبنم یحیایی</p>
        <img src="/image/Dashboard/EditDashborad.png" alt="Edit" className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
}