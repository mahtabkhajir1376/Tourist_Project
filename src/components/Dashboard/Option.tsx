import React from 'react';

const options = [
  {
    title: 'استرداد ها',
    description: '12 نفر کنسلی‌های این هفته',
    imgSrc: '/image/Dashboard/transaction.png',
  },
  {
    title: 'نظرات کاربران',
    description: '20 نظر در انتظار تایید شما',
    imgSrc: '/image/Dashboard/UserComment.png',
  },
  {
    title: 'تعداد کاربران',
    description: '74 کاربر جدید تا این لحظه',
    imgSrc: '/image/Dashboard/NumberofUser.png',
  },
];

export default function Option() {
  return (
    <div className='w-[321px] h-[348px] font-iransansNumber'>
      {options.map((option, index) => (
        <div key={index} className='bg-white w-[320px] h-[100px] rounded-xl flex items-center pr-[24px] pl-[24px] gap-[24px] mb-[22px]'>
          <img src={option.imgSrc} alt={option.title} className='w-[40px] h-[40px] mr-[16px]' />
          <div>
            <p className='font-regular text-sm leading-5 mb-2'>{option.title}</p>
            <p className='text-xs font-light text-[#707070]'>{option.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}