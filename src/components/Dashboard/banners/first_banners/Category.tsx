import React from "react";
import { RadioOption } from "@/components/showlist/TravelCategory";

export const categories: RadioOption[] = [
  { label: "بومگردی", value: "eco" },
  { label: "خارجی", value: "foreign" },
  { label: "ساحلی", value: "beach" },
  { label: "تهران گردی", value: "tehran" },
  { label: "جنوب گردی", value: "south" },
  { label: "تاریخی", value: "historical" },
  { label: "زیارتی", value: "pilgrimage" },
  { label: "جنگلی", value: "forest" },
  { label: "شمال گردی", value: "north" },
  { label: "کویر گردی", value: "desert" },
];

const Category = () => {
  return (
    <div className="flex flex-row flex-wrap justify-around items-center h-32 shadow-md  w-[69%] my-5 py-6 px-3">
      {categories.map((item, index) => {
        return (
          <label
            key={index}
            className="flex items-center justify-center 2xl:text-base xl:text-base md:text-[10px] lg:text-sm font-medium 2xl:w-[17%] xl:w-[17%] md:w-[17%]"
          >
            <input
              type="radio"
              value={item.value}
              name="radio-5"
              className="radio radio-success bg-[#DDFFF8] border-none  ml-4 md:w-4 md:h-4 lg:w-6 lg:h-6"
              defaultChecked
            />
            {item.label}
          </label>
        );
      })}
    </div>
  );
};

export default Category;
