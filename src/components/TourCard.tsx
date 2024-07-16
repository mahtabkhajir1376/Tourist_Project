import React from "react";

export type TOURCARD = {
  imageSrc: string;
  tourDays: string;
  location: string;
  capacity: string;
};

const TourCard: React.FC<TOURCARD> = ({
  imageSrc,
  tourDays,
  location,
  capacity,
}) => {
  return (
    <div className="flex flex-row justify-between items-center w-[23%] h-48">
      <img src={imageSrc} alt="" />
      <div className="">
        <span className="text-xl font-light">{tourDays}</span>
        <h5 className="text-[22px] my-2 font-bold">{location}</h5>
        <span className="text-xl font-light">{capacity}</span>
      </div>
    </div>
  );
};

export default TourCard;
