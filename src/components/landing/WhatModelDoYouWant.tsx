import React from 'react';


const images = [
  {
    icon: '/image/icongreen.png',
    title: 'شمال گردی',
    subtitle: 'هوای شمال همیشه میچسبه',
    src1: '/image/north.png',
    src2:'/image/subnorth.png'
  },
  {
    icon: '/image/icongreen.png',
    title: ' تهرانگردی',
    subtitle: 'تهران و دست کم نگیر',
    src1: '/image/tehran.png',
    src2:'/image/subtehran.png'
  },
  {
    icon: '/image/icongreen.png',
    title: ' کویر گردی',
    subtitle:'شبای کویر دیدن داره',
    src1: '/image/desert.png',
    src2:'/image/subdesert.png'
  },
  {
    icon: '/image/icongreen.png',
    title: 'جنوب گردی',
    subtitle: 'شور و حال جنوب محاله یادت بره',
    src1: '/image/south.png',
    src2:'/image/subsouth.png'
    
  }
];

const WhatModelDoYouWant = () => {
  return (
    <div className=''>
      <h1 className="font-medium text-2xl leading-10 p-4 mr-8">چه مدلی میخوای ؟</h1>
      <div className=" flex w-full h-[420px] rounded-md justify-center flex-row   gap-[45px] items-center bg-[#16BB9C1A]  ">
        {images.map((image, index) => (
          <div key={index} className=" items-center ">
            <div className='relative '>
              <div className=''>
                <img src= {image.src2}  alt="" />
              </div>
              <div className='absolute inset-2 flex items-center justify-center'>
                <img src={image.src1} alt="" />
              </div>
            </div>
            
           <div className='flex flex-col items-center justify-center p-1'>
           <h2 className='font-medium  text-[20px] leading-[33px] '>{image.title}</h2>
           <h3 className='text-sm font-light	 leading-[20px]'>{image.subtitle}</h3>

           </div>
            <div className='flex  flex-row 	items-center  justify-center p-2 gap-2'>
            <a href="" className='text-[#01A657] leading-[21px] font-medium text-sm'>مشاهده</a>
            <img src={image.icon} alt=""  className='text-[#01A657] leading-[21px] w-3  '/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatModelDoYouWant;
