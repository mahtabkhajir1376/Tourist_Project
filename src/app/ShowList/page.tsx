import React from 'react'
import PriceRange from '@/components/showlist/PriceRange'
import TravelCategory from '@/components/showlist/TravelCategory'
import DateTime from '@/components/showlist/DateTime'
import TheDesiredCity from '@/components/showlist/TheDesiredCity'
import ShowListCart from '@/components/showlist/ShowListCart'
import Footer from '@/components/Footer'
import Numberofpeople from '@/components/Numberofpeople'
import Navbar from '@/components/Navbar'

export default function page() {

  return (
    <>
    <div className='font-iransans bg-[#F8F8F8] '>
    <Navbar/>
    <div className='flex flex-col w-[163px] h-[36px] left-[1222px] mt-10 mb-10 mr-24  '>
        <h1 className=' text-2xl regular leading-9  '> تخفیف های ویژه </h1>
        </div>
     <div className='flex flex-row font-iransans w-[1440px]  top-[128px] left-[1px] justify-center '>
        
        <div className='flex flex-col  w-[492px] h-[950px] top-[101px] left-[907px] rounded-md pt-[32px] pb-[32x] pr-[24px] pl-[24px]  shadow-xl shadow-[#E3EBE9]  bg-white '>
            <Numberofpeople/>
            <DateTime/>
            <PriceRange/>
            <TheDesiredCity/>
             <TravelCategory/>
            

        </div>
        <div className='w-[821px] h-[967px] top-[102px] left-[46px] gap-[32px] mr-[40px] '>
            <ShowListCart/>

        </div>
     </div>
     <div className='mt-[107px]'>
     <Footer/>
     </div>
     </div>
    </>
  )
}
