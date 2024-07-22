import React from 'react';
import ImageGallarydetailtour from '@/components/ImageGallarydetailtour';
import Navbar from '@/components/Navbar';
import TourOptions from '@/components/TourOptions';

function DetailsPage() {
  return (
    <div className='font-iransans'>
    <Navbar/>
    <ImageGallarydetailtour/>
    <div className='flex flex-row w-[90%] mx-auto my-0 h-[985px]'>
    <TourOptions/>
    </div>
    </div>
  )
}

export default DetailsPage;