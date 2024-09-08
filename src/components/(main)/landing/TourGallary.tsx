"use client";
import React from "react";
import ImageLayout from "./ImageLayout";
import { Data } from "./PopularTourSwiper";
import axios from "axios";
import { BASE_URL_API } from "@/utils/services";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

type ImageData = HeaderImage[];

export type HeaderImage = {
  header: string;
  Capacity: string;
  position?: string;
};

const imageData: ImageData = [
  {
    header: "پاریس",
    Capacity: "5 تور فعال",
    position: "top-[7%]  right-[10%]",
  },
  {
    header: "رشت",
    Capacity: "3 تور فعال",
    position: "top-[10%]  right-[5%]",
  },
  {
    header: "ژاپن",
    Capacity: "4 تور فعال",
    position: "top-[11%]  right-[11%]",
  },
  {
    header: "اصفهان",
    Capacity: "2 تور فعال",
    position: "top-[11%]  right-[11%]",
  },
];

const fetchImagesTourGallary = async (type: string): Promise<Data[]> => {
  const response = await axios.get<Data[]>(`${BASE_URL_API}/banner`, {
    params: {
      type,
    },
  });
  return response.data;
};

const TourGallary: React.FC = () => {
  const [type, settype] = useState<string>("bottom");

  const { data, error, isLoading } = useQuery<Data[], Error>({
    queryKey: ["fetchImagesTourGallary", type],
    queryFn: () => fetchImagesTourGallary(type),
  });

  console.log(data);

  const finalMediaArray = data?.data[0].media[0].original_url;

  console.log(finalMediaArray);

  return (
    <div className="grid grid-cols-6  2xl:w-[90%] 2xl:h-[764px] sm:[80%] mx-auto my-0 2xl:gap-5 sm:gap-3 lg:[80%] lg:gap-2 ">
      <div className="col-span-4  grid grid-rows-2 2xl: sm:gap-2 lg:gap-2">
        <ImageLayout
          height="h-[367px]"
          ImageSrc={data?.data[1].media[0].original_url}
          span="row-span-1"
          header={imageData[1].header}
          capacity={imageData[1].Capacity}
          position={imageData[1].position}
        />

        <div className="row-span-1  grid grid-cols-2 2xl:gap-5 sm:gap-2 lg:gap-2">
          <ImageLayout
            height="h-[370px]"
            ImageSrc={data?.data[2].media[0].original_url}
            span="col-span-1"
            header={imageData[3].header}
            capacity={imageData[3].Capacity}
            position={imageData[3].position}
          />

          <ImageLayout
            height="h-[370px]"
            ImageSrc={data?.data[3].media[0].original_url}
            span="col-span-1"
            header={imageData[2].header}
            capacity={imageData[2].Capacity}
            position={imageData[2].position}
          />
        </div>
      </div>
      <ImageLayout
        height="h-[764px]"
        ImageSrc={data?.data[0].media[0].original_url}
        span="col-span-2"
        header={imageData[0].header}
        capacity={imageData[0].Capacity}
        position={imageData[0].position}
      />
    </div>
  );
};

export default TourGallary;
