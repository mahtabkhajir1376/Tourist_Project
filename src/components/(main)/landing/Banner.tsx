"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL_API } from "@/utils/services";
import Button from "./Button";


type data = {
  title: string;
  describe: string;
  image?: string;
  widthImage: string;
  span?: string;
  padding: string;
  text?: string;
  fontSizeparagraph: string;
  fontSizetitle: string;
};

type Data = {
  id: number;
  filter: string;
  banner_type: string;
  position: string;
  media: [
    {
      id: number;
      original_url: string;
    }
  ];
};



const Banner: React.FC = () => {
  const type = "middle";
  const fetchBannerImage = async (type: string): Promise<Data[]> => {
    try {
      const response = await axios.get<Data[]>(
        `  ${BASE_URL_API}/banner`,
        {
          params: {
            type,
          },
        }
      );
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
    queryKey: ["fetchBannerImage", type],
    queryFn: () => fetchBannerImage(type),
  });

  const imageUrlFirst = data ?. data[0]?.media[0].original_url
  const imageUrlSecound = data ?. data[2].media[0].original_url
  const imageUrlThird = data ? .data[1].media[0].original_url 
  

  return (
    <div className="flex flex-row justify-between items-center w-[89%] h-[515px] my-0 mx-auto font-iransansNumber  ">
      <div className=" h-full w-[36.5%] flex flex-col gap-5">
        <div className=" h-1/2 bg-center bg-cover rounded-lg relative "  style={{backgroundImage: `url(${imageUrlThird})`}} >
        <Button bgColor="bg-white" fontSize="text-sm font-medium" titleBtn="رزرو" borderRadius="rounded-md" width="w-[24.5%] h-[38px]" padding="px-4 py-2" position="bottom-6 right-4 absolute"  />
        </div>
        <div className=" h-1/2 bg-center bg-cover rounded-lg relative"  style={{backgroundImage: `url(${imageUrlSecound})`}} >
        <Button bgColor="bg-white" fontSize="text-sm font-medium" titleBtn="رزرو" borderRadius="rounded-md" width="w-[24.5%] h-[38px]" padding="px-4 py-2" position="bottom-6
        
        right-4 absolute"  />
        </div>

      </div>
      <div className=" h-full w-[62%] bg-center bg-cover relative" style={{backgroundImage: `url(${imageUrlFirst})`}} >
      <Button bgColor="bg-white" fontSize="text-sm font-medium" titleBtn="رزرو" borderRadius="rounded-md" width="w-[14.5%] h-[38px]" padding="px-4 py-2" position="bottom-20 right-8 absolute"  />
      </div>

    </div>
  );
};

export default Banner;
