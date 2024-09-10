"use client";
import React, { useState } from "react";
import ImageGallarydetailtour from "@/components/(main)/detailpage/ImageGallarydetailtour";
import Navbar from "@/components/(main)/Navbar";
import TourOptions from "@/components/(main)/detailpage/TourOptions";
import BuyForm from "@/components/(main)/detailpage/BuyForm";
import LawsandDocuments from "@/components/(main)/detailpage/LawsandDocuments";
import TourProgressSwiper from "@/components/(main)/detailpage/TourProgressSwiper";
import Comments from "@/components/(main)/detailpage/Comments";
import Footer from "@/components/(main)/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { Data } from "@/components/(main)/landing/PopularTourSwiper";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL_API } from "@/utils/services";
import { TourItem } from "@/components/(main)/landing/PopularTourSwiper";

interface Props {
  params: { id: string };
  searchParams: {};
}

function page({ params }: Props) {
  const [tourdata, settourdata] = useState<Data[]>([]);
  const fetchdetailTour = async (id: string): Promise<Data[]> => {
    try {
      const response = await axios.get<Data[]>(`${BASE_URL_API}/trip/${id}`);
      console.log("Data received:", response.data);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Server Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected Error:", error.message);
      }
      throw error;
    }
  };

  const { data, error, isLoading } = useQuery<Data[], Error>({
    queryKey: ["fetchdetailTour"],
    queryFn: () => fetchdetailTour(params.id),
  });

  const tourData: TourItem = data?.data;
  console.log(tourData);

  return (
    <div className="font-iransans">
      <Navbar />
      <ImageGallarydetailtour />
      <div className="flex flex-row 2xl:w-[90%] sm:w-[95%] lg:w-[90%] justify-between  mx-auto my-0 h-[985px]">
        <TourOptions tourData ={tourData} />
        <BuyForm />
      </div>
      <TourProgressSwiper />
      <LawsandDocuments tourData ={tourData}  />
      <Comments />
      <Footer />
    </div>
  );
}

export default page;
