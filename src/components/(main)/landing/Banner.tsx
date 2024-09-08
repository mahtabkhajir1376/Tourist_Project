"use client"
import React from "react";
import Paragraph from "./Paragraph";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type BANNER = {
  imageSrc: string;
  padding: string;
  span: string;
};

type data = {
  title: string;
  describe: string;
  image?: string;
  bgColor: string;
  widthImage: string;
  span?: string;
  padding: string;
  text?: string;
  fontSizeparagraph: string;
  fontSizetitle: string;
};

type dataBanner = data[];

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

const dataBanner: dataBanner = [
  {
    title: "یه سفر خارجمون نشه ؟",
    describe: `یه سفر داریم لس آنجلس اگه نری باخت دادی ،
     جمع کن بریم ! `,
    image: "/image/azadi.svg",
    bgColor: "bg-[#DBF9F2]",
    widthImage: "xl:w-[60%] sm:w-[50%] md:w-[50%] 2xl:w-[55%]",
    span: "col-span-2",
    padding: "pr-[30px] ",
    text: "ببین منو ، از دستش نده !",
    fontSizeparagraph: "text-xl font-regular",
    fontSizetitle: "text-2xl font-medium",
  },
  {
    title: "بریم جنوب عشق و حال ؟",
    describe: "سفر 5 روزه به جنوب همیشه یادت میمونه ! ",
    bgColor: "bg-[#DEF0FB]",
    widthImage: "w-full",
    padding: "xl:pr-20 2xl:pr-20 sm:pr-8 md:pr-10  ",
    fontSizeparagraph: "text-base font-light",
    fontSizetitle: "text-base font-medium",
  },
  {
    title: "تور گردشگری 7 روزه تاریخی",
    describe: "7 روز بریم کرمانشاه تا ببینی چه جاهایی تو ایران داریم !",
    image: "/image/chamedan2.svg",
    bgColor: "bg-[#FFF3D9]",
    widthImage: "xl:w-[48%] sm:w-[35%] md:w-[35%] 2xl:w-[40%]",
    padding: "xl:pr-20 sm:pr-8 md:pr-8 2xl:pr-6",
    fontSizeparagraph: "text-base font-light",
    fontSizetitle: "text-base font-medium",
  },
];

const Banner: React.FC = () => {

  const type = "middle"
  const fetchBannerImage = async (type:string): Promise<Data[]> => {
    try {
      const response = await axios.get<Data[]>(
        `  http://mohammad-mokhtari.ir/safarjoo/api/banner`,
        {
          params: {
            type
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
    queryKey: ["fetchBannerImage",type],
    queryFn: () => fetchBannerImage(type),
  });


  const bannerImages =data?.data[0].media[0].original_url


  return (
    <>
      <div className="xl:w-[89%] sm:w-full xl:gap-5 sm:gap-2 my-0 mx-auto grid grid-cols-3 sm:min-h-max md:min-h-max lg:min-h-96 xl:min-h-lvh 2xl:min-h-[415px]">
        <div className="col-span-1  grid grid-rows-2 sm:gap-2 xl:gap-5">
          <div
            className={`${dataBanner[1].bgColor} flex flex-row justify-between w-full relative rounded-md`}
          >
            <Paragraph
              title={dataBanner[1].title}
              paragraph={dataBanner[1].describe}
              padding={dataBanner[1].padding}
              fontSizeparagraph={dataBanner[1].fontSizeparagraph}
              fontSizetitle={dataBanner[1].fontSizetitle}
            />
          </div>
          <div
            className={`${dataBanner[2].bgColor} flex flex-row justify-between w-full relative rounded-md   `}
          >
            <Paragraph
              title={dataBanner[2].title}
              paragraph={dataBanner[2].describe}
              padding={dataBanner[2].padding}
              fontSizeparagraph={dataBanner[2].fontSizeparagraph}
              fontSizetitle={dataBanner[2].fontSizetitle}
            />
            <img
              src={data?.data[1].media[0].original_url}
              className={` bottom-0 absolute left-0 rounded-md ${dataBanner[2].widthImage}`}
            />
          </div>
        </div>
        <div
          className={`${dataBanner[0].bgColor}  flex flex-row justify-between w-full relative ${dataBanner[0].span}   rounded-md`}
        >
          <Paragraph
            title={dataBanner[0].title}
            paragraph={dataBanner[0].describe}
            padding={dataBanner[0].padding}
            text={dataBanner[0].text}
            fontSizeparagraph={dataBanner[0].fontSizeparagraph}
            fontSizetitle={dataBanner[0].fontSizetitle}
          />
          <img
            src={data?.data[0].media[0].original_url}
            className={` bottom-0 absolute left-0 rounded-md   ${dataBanner[0].widthImage}`}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
