import React from 'react';
import ImageGallarydetailtour from '@/components/ImageGallarydetailtour';
import Navbar from '@/components/Navbar';
import TourOptions from '@/components/TourOptions';
import BuyForm from '@/components/BuyForm';
import LawsandDocuments from '@/components/LawsandDocuments';

function DetailsPage() {
  return (
    <div className='font-iransans'>
    <Navbar/>
    <ImageGallarydetailtour/>
    <div className='flex flex-row w-[90%] justify-between  mx-auto my-0 h-[985px]'>
    <TourOptions/>
    <BuyForm/>
    </div>
    <LawsandDocuments/>
    </div>
  )
}

export default DetailsPage;