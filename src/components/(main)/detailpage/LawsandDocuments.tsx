"use client";
import React from "react";
import { TourItem } from "../landing/PopularTourSwiper";


const LawsandDocuments: React.FC = ({tourData}:TourItem) => {

  const documents = tourData?.tour_detail.details?.documents.split("\n");
  const rules = tourData?.tour_detail.details?.rules.split("\n");

  return (
    <div className="w-[90%] mx-auto my-0">
      <div className="mb-[78px] mt-40 font-iransansNumber">
        <h3 className="font-medium 2xl:text-[32px] mb-8  sm:text-lg lg:text-xl ">
          مدارک مورد نیاز :
        </h3>
        {documents?.map((document, index) => {
          return (
            <li
              className="2xl:text-[22px] sm:text-sm  lg:text-base font-regular   2xl:leading-[56px] sm:leading-[30px] lg:leading-[40px]"
              key={index}
            >
              {document}
            </li>
          );
        })}
      </div>
      <div className="mb-[78px] font-iransansNumber">
        <h3 className="font-medium text-[32px]  2xl:text-[32px] mb-8  sm:text-lg lg:text-xl ">
          قوانین تور :
        </h3>
        {rules?.map((rule, index) => {
          return (
            <li
              className="2xl:text-[22px] sm:text-sm  lg:text-base font-regular  2xl:leading-[56px] sm:leading-[30px]  lg:leading-[40px]"
              key={index}
            >
              {rule}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default LawsandDocuments;
