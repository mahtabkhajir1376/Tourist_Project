import React from "react";
import { categories } from "../../banners/first_banners/Category";

interface ItemTypeStay {
  id: number;
  name: string;
  value: string;
}

type TypeStay = ItemTypeStay[];

const TripType: React.FC = () => {
  const typeStay: TypeStay = [
    { id: 1, name: "هتل", value: "hotel" },
    { id: 2, name: "کلبه", value: "cottage" },
    { id: 3, name: "سوئیت", value: "Suite" },
    { id: 4, name: "چادر", value: "tent" },
  ];
  const tripType: TypeStay = [
    { id: 1, name: "هواپیما", value: "airpalne" },
    { id: 2, name: "اتوبوس", value: "bus" },
    { id: 3, name: "قطار", value: "trani" },
  ];

  return (
    <div className="mt-20">
      <div className="flex flex-row justify-start items-start w-[40%] pr-7">
        <span className="text-base font-medium">نوع اقامت :</span>
        {typeStay.map((item, index) => {
          return (
            <label
              key={index}
              className="flex items-center w-1/2 sm:w-auto mb-2 mx-4"
            >
              <input
                type="radio"
                value={item.value}
                name="radio-5"
                className="radio radio-success bg-[#DDFFF8] border-none"
                defaultChecked
              />
              <span className="ml-1 text-base font-medium mr-3">
                {item.name}
              </span>
            </label>
          );
        })}
      </div>
      <div className="flex flex-row justify-start items-start w-[40%] pr-7 mt-14 ">
        <span className="text-base font-medium">نوع سفر :</span>
        {tripType.map((item, index) => {
          return (
            <label
              key={index}
              className="flex items-center w-1/2 sm:w-auto mb-2 mx-7 "
            >
              <input
                type="radio"
                value={item.value}
                name="radio-6"
                className="radio radio-success bg-[#DDFFF8] border-none"
                defaultChecked
              />
              <span className="ml-1 text-base font-medium mr-3">
                {item.name}
              </span>
            </label>
          );
        })}
      </div>
      <div className="flex flex-row  justify-between       text-base font-medium  items-start h-32   w-[61%] mt-20 py-6 pr-7">
        <span className="text-base font-medium">دسته بندی  :</span>
        <div className="flex flex-row flex-wrap justify-around items-center w-[90%]">
          {categories.map((item, index) => {
            return (
              <label
                key={index}
                className="flex items-center justify-center mb-5 2xl:text-base xl:text-base md:text-[10px] lg:text-sm font-medium 2xl:w-[17%] xl:w-[17%] md:w-[17%]"
              >
                <input
                  type="checkbox"
                  value={item.value}
                  className="checkbox checkbox-success w-6 h-6 text-white bg-[#DDFFF8] border-none  ml-4 md:w-4 md:h-4 lg:w-6 lg:h-6 cu"
                  defaultChecked
                />
                {item.label}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TripType;
