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
import axios from 'axios';
import { Data } from '@/components/landing/PopularTourSwiper';
import { useQuery } from '@tanstack/react-query';

function page() {



    // const fetchdetailTour = async ({pathname}): Promise<Data[]> => {
    //     try {
    //       const response = await axios.get<Data[]>(
    //         `  http://mohammad-mokhtari.ir/safarjoo/api/trip/${id}`
    //       );
    //       console.log("Data received:", response.data);
    //       return response.data;
    //     } catch (error: any) {
    //       if (axios.isAxiosError(error)) {
    //         console.error("Server Error:", error.response?.data || error.message);
    //       } else {
    //         console.error("Unexpected Error:", error.message);
    //       }
    //       throw error;
    //     }
    //   };
    
    
    //   const { data, error, isLoading } = useQuery<Data[], Error>({
    //     queryKey: ["fetchdetailTour", ],
    //     queryFn: () => fetchdetailTour(),
      
    //   });



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