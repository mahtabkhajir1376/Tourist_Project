import React from 'react';
import Image from 'next/image';

const images = [

  {
    icon: '/image/icongreen.png',
    title: ' تهرانگردی',
    subtitle: 'تهران و دست کم نگیر',
    src: '/image/Tehran.png',
    
  },
  {
    icon: '/image/icongreen.png',
    title: 'شمال گردی',
    subtitle: 'هوای شمال همیشه میچسبه',
    src: '/image/North.png',
    
  },
 
  {
    icon: '/image/icongreen.png',
    title: 'جنوب گردی',
    subtitle: 'شور و حال جنوب محاله یادت بره',
    src: '/image/South.png',
    
    
  },
  {
    icon: '/image/icongreen.png',
    title: ' کویر گردی',
    subtitle:'شبای کویر دیدن داره',
    src: '/image/Desert.png',
    
  },
];

const WhatModelDoYouWant = () => {
  return (
    <div className=''>
      <div className='mr-[85px]  '>
      <h1 className="font-medium text-[28px] ">چه مدلی میخوای ؟</h1>
      </div>
      <div className=" flex justify-center flex-row   bg-[#16BB9C1A]  m-[81px]  pb-[20px]  pt[18px]   ">
        <div className='  flex flex-row  justify-center items-center gap-4'>
        {images.map((image, index) => (
          <div key={index} className=" items-center flex flex-col justify-center w-72  ">
            <img src={image.src} alt="" className=' w-64 h-64 ' />
           <div className='flex flex-col items-center justify-center pt-2'>
           <h2 className='font-medium  text-[18px] leading-[33px] '>{image.title}</h2>
           <h4 className='font-light leading-[16px] text-[14px]'>{image.subtitle}</h4>
           </div>
            <div className='flex  flex-row 	items-center justify-center w-[298px] rounded-xl gap-2.5  pt-3 '>
            <a href="" className='text-[#01A657] leading-[25px] font-medium text-sm '>مشاهده</a>
            <Image src={image.icon} alt="" className='text-[#01A657] leading-[21px] w-3 '/>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default WhatModelDoYouWant;
