"use client"

import React from 'react';

const PriceRange: React.FC = () => {
  return (
    <div className=" w-[428px] h-[118px] gap-[22px] mt-[75px]  mr-[32px] ml-[32px] ">
      <h2 className="w-[106px] h-[24px] text-base medium "> محدوده قیمت : </h2>
      <div className="flex justify-between  mt-2 w-[413px] h-[72px]  ">
        <div className='w-[107px] h-[21px] left-[304px] top-[21px] gap-1.5 ' >
        <span className='ultraLight text-sm leading-[21px] '>  تا 16.000.000  تومان  </span>
        </div>
        <div  className=' w-[89px] h-[21px] left-[160.5px] '>
        <span className=' medium text-sm leading-[21px]'>  5000.000 تومان </span>
        </div>
        <div className='w-[99px] h-[21px] top-[21px] gap-1.5'>
        <span className='ultraLight  text-sm leading-[21px]  '> از 1.000.000 تومان </span>
        </div>
      </div>
      <input type="range" min="1000000"  max="16000000" defaultValue="5000000"  className=" accent-[#7B4794] w-[413px] h-[20px] top-[52px] " />
    </div>
  );
};

export default PriceRange;