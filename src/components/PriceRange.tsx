"use client";
import React from 'react';

const PriceRange: React.FC = () => {
  return (
    <div className="w-full max-w-[428px] h-[118px] gap-[22px] mt-[75px] mx-[16px] sm:mx-[32px] md:mt-[75px] lg:mx-[32px] xl:mx-[32px]">
      <h2 className="text-base font-medium">محدوده قیمت:</h2>
      <div className="flex justify-between mt-2 w-full h-[72px]">
        <div className='w-[125px] h-[21px] mt-4'>
          <span className='font-extralight text-sm leading-[21px]'>تا 16.000.000 تومان</span>
        </div>
        <div className='w-[120px] h-[21px]'>
          <span className='font-medium text-sm leading-[21px] mt-6'>5.000.000 تومان</span>
        </div>
        <div className='w-[125px] h-[21px] mt-4'>
          <span className='font-extralight text-sm leading-[21px]'>از 1.000.000 تومان</span>
        </div>
      </div>
      <input
        type="range"
        min="1000000"
        defaultValue="5000000"
        max="16000000"
        className="w-full h-[6px] accent-[#01A657] rounded-xl"
        style={{
          background: '#DDFFF8',
          direction: 'ltr',
        }}
      />
    </div>
  );
};

export default PriceRange;
