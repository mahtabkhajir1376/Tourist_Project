import React from 'react';
import ImageGallarydetailtour from '@/components/detailpage/ImageGallarydetailtour';
import Navbar from '@/components/Navbar';
import TourOptions from '@/components/detailpage/TourOptions';
import BuyForm from '@/components/detailpage/BuyForm';
import LawsandDocuments from '@/components/detailpage/LawsandDocuments';
import TourProgressSwiper from '@/components/detailpage/TourProgressSwiper';
import Comments from '@/components/detailpage/Comments';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

function page() {

  return (
    <div className='font-iransans'>
    <Navbar/>
    <ImageGallarydetailtour/>
    <div className='flex flex-row 2xl:w-[90%] sm:w-[95%] lg:w-[90%] justify-between  mx-auto my-0 h-[985px]'>
    <TourOptions/>
    <BuyForm/>
    </div>
    <TourProgressSwiper/>
    <LawsandDocuments/>
    <Comments/>
    <Footer/>
    </div>
  )
}

export default page;