"use client";
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Link from 'next/link';

ChartJS.register(ArcElement, Tooltip, Legend);

const Thelevelofusersatisfaction: React.FC = () => {
  const data = {
    labels: ['رضایت', 'نا رضایت'],
    datasets: [
      {
        data: [53, 47],
        backgroundColor: ['#01A657', '#E5E7EB'], 
        borderWidth: 0,
        hoverBackgroundColor: ['#01A657', '#E5E7EB'],
      },
    ],
  };

  const options = {
    rotation: -135, 
    circumference: 270, 
    cutout: '80%', 
    plugins: {
      tooltip: {
        enabled: false, 
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-[330px] h-[450px] bg-white flex flex-col items-center justify-center p-4 rounded-xl font-iransansNumber ">
        <p className='font-medium text-sm '>  میزان رضایت کاربران از این تور </p>
      <div className="relative w-full h-[200px] flex justify-center items-center ">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/image/DetailsTour/TourdetailsCard/HappyBackground.svg" alt="" className="absolute" />
          <img src="/image/DetailsTour/TourdetailsCard/Happy.svg" alt="" className="relative" />
        </div>
      </div>
      <p className="text-[#01A657] text-sm font-medium mt-4">٪۵۳ رضایت</p>
      <p className="text-[#707070] text-center text-[10px] leading-6  font-light ">
        از مجموع ۴۸ نظر ثبت شده این میزان از نظر کاربران امتیاز بالایی ثبت کردند و از این تور راضی بودند.
      </p>
      <Link href={"/dashboard/comments"}>
      <button className="mt-4 w-[267px] h-10 bg-[#01A657] text-white py-2 px-4 rounded-lg text-sm font-medium">
        مشاهده نظرات
      </button>
      </Link>
    </div>
  );
};

export default Thelevelofusersatisfaction;