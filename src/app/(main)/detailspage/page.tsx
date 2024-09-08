import React from 'react';
import ImageGallarydetailtour from '@/components/(main)/detailpage/ImageGallarydetailtour';
import Navbar from '@/components/(main)/Navbar';
import TourOptions from '@/components/(main)/detailpage/TourOptions';
import BuyForm from '@/components/(main)/detailpage/BuyForm';
import LawsandDocuments from '@/components/(main)/detailpage/LawsandDocuments';
import TourProgressSwiper from '@/components/(main)/detailpage/TourProgressSwiper';
import Comments from '@/components/(main)/detailpage/Comments';
import Footer from '@/components/(main)/Footer';
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