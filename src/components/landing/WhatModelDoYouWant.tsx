import React from "react";

const images = [
  {
    title: " کویر گردی",
    subtitle: "شبای کویر دیدن داره",
    src: "/image/Desert.png",
  },
  {
    title: "شمال گردی",
    subtitle: "هوای شمال همیشه میچسبه",
    src: "/image/North.png",
  },
  {
    title: " تهرانگردی",
    subtitle: "تهران و دست کم نگیر",
    src: "/image/Tehran.png",
  },

  {
    title: "جنوب گردی",
    subtitle: "شور و حال جنوب محاله یادت بره",
    src: "/image/South.png",
  },
];

const WhatModelDoYouWant = () => {
  return (
    <div className="bg-[#16BB9C1A] 2xl:h-[582px] xl:h-[580px] sm:h-[450px] lg:h-[500px] flex flex-col justify-center items-center">
      <div className=" flex justify-around flex-row 2xl:w-[85%] xl:w-[85%] sm:w-[95%] my-0 mx-auto 2xl:h-[450px] xl:h-[450px] sm:h-[300px] lg:h-[400px]">
        {images.map((image, index) => (
          <div
            key={index}
            className=" items-center flex flex-col justify-around w-72 font-iransansNumber  "
          >
            <img src={image.src} alt="" className="2xl:w-72 2xl:h-72 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-52  lg:h-52" />
            <div className="flex flex-col items-center justify-center pt-2">
              <h2 className="font-medium  2xl:text-[22px] xl:text-[22px] sm:text-sm lg:text-lg ">{image.title}</h2>
              <h4 className="font-light 2xl:text-base xl:text-base sm:text-[12px] lg:text-lg  mt-2">{image.subtitle}</h4>
            </div>
            <a
              href=""
              className="text-[#01A657]  font-medium 2xl:text-sm xl:text-sm sm:text-[12px] lg:text-sm  flex flex-row justify-between items-center 2xl:w-[23%] xl:w-[23%] sm:w-[38%] lg:w-[26%]"
            >
              مشاهده
              <img
                src="/svg/arrowleft.svg"
                alt=""
                className="text-[#01A657]  2xl:w-3 xl:w-3 sm:w-3  "
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatModelDoYouWant;
