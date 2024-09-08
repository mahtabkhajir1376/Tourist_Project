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
    <div className='w-[30%] h-[350px]  font-iransansNumber flex flex-col justify-between items-center'>
      {options.map((option, index) => (
        <div key={index} className='bg-white w-full py-4  rounded-xl flex flex-row  items-center px-6 '>
          <img src={option.imgSrc} alt={option.title} className='w-10 h-10 mr-[16px]' />
          <div className='mr-5'>
            <p className='font-regular text-sm leading-5 mb-2'>{option.title}</p>
            <p className='text-xs font-light text-[#707070]'>{option.description}</p>
          </div>
        </div>
      ))} 
    </div>
  );
}