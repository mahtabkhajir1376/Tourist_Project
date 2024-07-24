import React from 'react'
import Navbar from '@/components/Navbar'
import Specialdiscounts from '@/components/Specialdiscounts'
import PriceRange from '@/components/PriceRange'
import TravelCategory from '@/components/TravelCategory'
import DateTime from '@/components/DateTime'
import TheDesiredCity from '@/components/TheDesiredCity'
import ShowListCart from '@/components/ShowListCart'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <>
    <div className='font-iransans  '>
    <Navbar/>
    <div className='flex flex-col w-[163px] h-[36px] left-[1222px] mt-10 mb-10 mr-24  '>
        <h1 className=' text-2xl regular leading-9  '> تخفیف های ویژه </h1>
        </div>
     <div className='flex flex-row font-iransans w-[1440px]  top-[128px] left-[1px] justify-center '>
        
        <div className='flex flex-col  w-[492px] h-[950px] top-[101px] left-[907px] rounded-md  pt-[24px] pr-[32px] pb-[24px] pl-[32px]  shadow-xl shadow-[#E3EBE9]  '>
            <Specialdiscounts/>
            <PriceRange/>
            <TravelCategory/>
            <DateTime/>
            <TheDesiredCity/>
            

        </div>
        <div className='w-[821px] h-[967px] top-[102px] left-[46px] gap-[32px] '>
            <ShowListCart/>

        </div>
     </div>
     <Footer/>
     </div>
    </>
  )
}
