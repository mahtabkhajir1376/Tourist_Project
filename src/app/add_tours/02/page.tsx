import React from 'react';
import ProgressBar from '@/components/dashboard/tours/ProgressBar';
import TourInformationEdit from '@/components/dashboard/tours/tour-detail 02/TourInformationEdit';
import Link from 'next/link';
import Button from '@/components/landing/Button';

function page() {
  return (
    <div className='font-iransansNumber w-full  h-lvh  overflow-y-auto bg-[#F8F8F8]'>
        <ProgressBar value='w-[66%]'/>
        <TourInformationEdit/>
        <Link href="/add_tours/03" className="flex flex-row justify-end items-center w-[90%] mx-auto mt-28 mb-10 ">
        <Button
          bgColor="bg-[#01A657]"
          borderRadius="rounded-md"
          fontSize="font-medium 2xl:text-sm xl:text-sm md:text-xs lg:text-sm font-iransansNumber "
          titleBtn="ثبت و ادامه"
          width="2xl:w-[16%] xl:w-[16%] md:w-[25%] lg:w-[23%] h-10"
          padding="px-6 py-2"
          textColor="text-white"
        />
        </Link>
    </div>
  )
}

export default page;