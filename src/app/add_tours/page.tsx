import React from 'react';
import ProgressBar from '@/components/dashboard/tours/ProgressBar';
import GallaryImageUplode from '@/components/dashboard/tours/GallaryImageUplode';

function page() {
  return (
    <div className='font-iransans  w-full relative h-lvh  overflow-y-auto bg-[#F8F8F8]'>
      <ProgressBar/>
      <GallaryImageUplode/>
    </div>
  )
}

export default page