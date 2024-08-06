"use client"
import React, { useState } from "react";
import { useEffect } from "react";

interface Card {
  destination: string;
  origin: string;
  price: string;
  comment: string;
  person: string;
  moreDetails: string;
  moreThenDetails: string;
  amountOfSatisfaction: string;
  src: string;
}

const cardSlider: Card[] = [
  {
    destination: " کمپ جنگل گیسوم ",
    origin: " مبدا تهران ",
    price: "قیمت :1.500.000 تومان",
    comment: "35",
    moreDetails: "3 شب / طبیعت گردی / کمپ / چادر ",
    moreThenDetails: "امکانات : غذا / تورلیدر / عکاس",
    amountOfSatisfaction: "3.2 ",
    person: "12",
    src: "/image/GreenMountian.png",
  },
  {
    destination: " کمپ جنگل گیسوم ",
    origin: " مبدا تهران ",
    price: "قیمت :1.500.000 تومان",
    comment: "35",
    moreDetails: "3 شب / طبیعت گردی / کمپ / چادر ",
    moreThenDetails: "امکانات : غذا / تورلیدر / عکاس",
    person: "12",
    amountOfSatisfaction: "3.2 ",
    src: "/image/Road.png",
  },
  {
    destination: " کمپ جنگل گیسوم ",
    origin: " مبدا تهران ",
    price: "قیمت :1.500.000 تومان",
    comment: "35",
    moreDetails: "3 شب / طبیعت گردی / کمپ / چادر ",
    moreThenDetails: "امکانات : غذا / تورلیدر / عکاس",
    person: "12",
    amountOfSatisfaction: "3.2 ",
    src: "/image/CloudJungle.png",
  },
];

const ShowListCart: React.FC = () => {
  const [tourdata, settourdata] = useState<object>({});

  useEffect(() => {
    fetch("http://mokhtari.v1r.ir/SafarJoo/api/tour")
      .then((Response) => Response.json())
      .then((tourdata) => settourdata(tourdata))
      .catch((error) => console.log(error));
  },[]);

console.log(tourdata)

  return (
    <div className="flex flex-col w-[821px] h-[230px] gap-8 top-[50px] ">
      {cardSlider.map((card, index) => (
        <div key={index} className="bg-white p-[12px] pl-[24px] pr-[24px]">
          <div className="flex flex-row justify-between mb-4">
            <div className="relative flex flex-row">
              <img
                src={card.src}
                alt={card.destination}
                className="w-[280px] h-[280px] rounded-xl"
              />
              <img
                src="/svg/like.svg"
                alt="Like"
                className="absolute top-2 left-2 w-[24px] h-[24px] cursor-pointer"
              />
            </div>
            <div className="flex flex-row w-[511px] h-[231px] mb-[35px] justify-between items-center">
              <div className="flex flex-col text-base font-medium w-[271px] h-[188px] gap-[20px] mt-[12px] mr-[15px] mb-3">
                <p>{card.destination}</p>
                <p>{card.moreDetails}</p>
                <p>{card.moreThenDetails}</p>
                <p>{card.price}</p>
              </div>
              <div className="flex flex-col justify-between items-end text-base font-medium  w-[135px] h-[188px] gap-[20px]  ">
                <div className="flex flex-row items-center justify-center gap-[14px]   ">
                  <p>{card.amountOfSatisfaction}</p>
                  <img
                    src="/image/iconShowlistcartStar.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="flex flex-row items-center justify-center  gap-[14px]  ">
                  <p>{card.comment}</p>
                  <img
                    src="/image/iconShowlistcartComment.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="flex flex-row items-center justify-center gap-[14px]  ">
                  <p>{card.person}</p>
                  <img
                    src="/image/iconShowlistcartPerson.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="flex flex-row items-center justify-center gap-[14px]   ">
                  <p>{card.origin}</p>
                  <img
                    src="/image/iconShowlistcartLocation.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className=" flex flex-col mt-10 ">
                  <button className=" bg-[#01A657] text-white rounded-md h-[42px] w-[489px]  ">
                    {" "}
                    مشاهده و رزرو{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowListCart;
