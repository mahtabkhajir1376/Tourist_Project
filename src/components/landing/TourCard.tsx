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
    <div className="flex flex-row justify-around items-center 2xl:w-[23%] 2xl:h-48 xl:w-[25%] sm:w-[25%]">
      <img src={imageSrc} alt="" className="sm:w-[50%]" />
      <div className="sm:w-[40%]" >
        <span className="2xl:text-xl xl:text-xl font-light sm:text-xs lg:text-lg">{tourDays}</span>
        <h5 className="2xl:text-[22px] xl:text-[22px] my-2 font-bold sm:text-sm lg-text-[20px]">{location}</h5>
        <span className="2xl:text-xl xl:text-xl font-light sm:text-xs lg:text-lg">{capacity}</span>
      </div>
    </div>
  );
};

export default TourCard;
