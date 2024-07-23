import React from "react";
import TourCard from "./TourCard";
import { TOURCARD } from "./TourCard";

type TOURDATA = TOURCARD[];

const tourData: TOURDATA = [
  {
    imageSrc: "/image/Image.png",
    location: "کاشان",
    capacity: "20 ظرفیت",
    tourDays: "تور 3 روزه",
  },
  {
    imageSrc: "/image/Image3.png",
    location: "ترکیه",
    capacity: "14 ظرفیت",
    tourDays: "تور 5 روزه",
  },
  {
    imageSrc: "/image/Image5.png",
    location: "گیلان",
    capacity: "22 ظرفیت",
    tourDays: "تور 5 روزه",
  },
  {
    imageSrc: "/image/Image8.png",
    location: "کاشان",
    capacity: "ظرفیت 20",
    tourDays: "تور 3 روزه",
  },
  {
    imageSrc: "/image/Image2.png",
    location: "کرمانشاه",
    capacity: "10 ظرفیت",
    tourDays: "تور 4 روزه",
  },
  {
    imageSrc: "/image/Image4.png",
    location: "جنوب",
    capacity: "6 ظرفیت",
    tourDays: "تور 7 روزه",
  },
  {
    imageSrc: "/image/Image6.png",
    location: "قم",
    capacity: "16 ظرفیت",
    tourDays: "تور 1 روزه",
  },
  {
    imageSrc: "/image/Image7.png",
    location: "کاشان",
    capacity: "20 ظرفیت",
    tourDays: "تور 3 روزه",
  },
];


const PopularTour=()=> {
  return (
    <div className="flex flex-row justify-around items-center flex-wrap h-[453px]">
    {tourData.map((item) => {
      return (
        <TourCard
          imageSrc={item.imageSrc}
          capacity={item.capacity}
          location={item.location}
          tourDays={item.tourDays}
        />
      );
    })}
  </div>
  )
}

export default PopularTour
