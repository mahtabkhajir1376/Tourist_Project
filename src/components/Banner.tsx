import React from "react";
import Paragraph from "./Paragraph";

type BANNER = {
  imageSrc: string;
  padding: string;
  span: string;
};

type BANNER3 = {
  imageSrc: string;
  padding: string;
  span: string;
};
type data = {
  title: string;
  describe: string;
  image: string;
  bgColor: string;
  widthImage: string;
  span?: string;
  padding:string
};

type dataBanner = data[];

const dataBanner: dataBanner = [
  {
    title: "یه سفر خارجمون نشه ؟",
    describe: `یه سفر داریم لس آنجلس اگه نری باخت دادی ، جمع کن بریم ! `,
    image: "/image/azadi.svg",
    bgColor: "bg-[#DBF9F2]",
    widthImage: "w-[60%]",
    span: "col-span-2",
    padding:"pr-5"
  },
  {
    title: "بریم جنوب عشق و حال ؟",
    describe: "سفر 5 روزه به جنوب همیشه یادت میمونه ! ",
    image: "/image/chamedan.svg",
    bgColor: "bg-[#DEF0FB]",
    widthImage: "w-full",
    padding:"pr-20"
  },
  {
    title: "تور گردشگری 7 روزه تاریخی",
    describe: "7 روز بریم کرمانشاه تا ببینی چه جاهایی تو ایران داریم !",
    image: "/image/chamedan2.svg",
    bgColor: "bg-[#FFF3D9]",
    widthImage: "w-[50%]",
    padding:"pr-5"
  },
];

const Banner: React.FC = () => {
  return (
    <>
      <div className="w-[89%] gap-5 my-0 mx-auto grid grid-cols-3 min-h-[515px] ">
        <div className="col-span-1  grid grid-rows-2 gap-5">
          <div
            className={`${dataBanner[1].bgColor} flex flex-row justify-between w-full relative   rounded-md`}
          >
            <Paragraph
              title={dataBanner[1].title}
              paragraph={dataBanner[1].describe}
              padding={dataBanner[1].padding}
            />
            <img
              src={dataBanner[1].image}
              className={` bottom-0 absolute left-0 ${dataBanner[1].widthImage}`}
            />
          </div>
          <div
            className={`${dataBanner[2].bgColor} flex flex-row justify-between w-full relative   rounded-md`}
          >
            <Paragraph
              title={dataBanner[2].title}
              paragraph={dataBanner[2].describe}
              padding={dataBanner[2].padding}

            />
            <img
              src={dataBanner[2].image}
              className={` bottom-0 absolute left-0 ${dataBanner[2].widthImage}`}
            />
          </div>
        </div>
        <div
          className={`${dataBanner[0].bgColor} flex flex-row justify-between w-full relative ${dataBanner[0].span}   rounded-md`}
        >
          <Paragraph
            title={dataBanner[0].title}
            paragraph={dataBanner[0].describe}
            padding={dataBanner[0].padding}

          />
          <img
            src={dataBanner[0].image}
            className={` bottom-0 absolute left-0 ${dataBanner[0].widthImage} `}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
