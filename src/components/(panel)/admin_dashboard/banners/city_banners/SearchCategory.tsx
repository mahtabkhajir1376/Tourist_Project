import React from "react";
import { RadioOption } from "@/components/(main)/showlist/TravelCategory";


const cityCategories: RadioOption[] = [   
    { label: ' رشت ', value: 'rasht' },   
    { label: ' پاریس ', value: 'paris' },   
    { label: ' دبی ', value: 'dobey' },   
    { label: ' اصفهان  ', value: 'esfahan' },   
  ];   


const SearchCategory: React.FC = () => {
  return (
    <div className="flex flex-col 2xl:w-[61%] md:w-[90%] shadow-md bg-white h-36 py-6 px-6 rounded-md mr-7">
      <div className="flex flex-row justify-between items-center  mx-auto my-0 w-full ">
        <h2 className=" 2xl:text-base xl:text-base md:text-[10px] lg:text-sm font-medium 2xl:w-[32%] xl:w-[32%] md:w-[23%]">شهر مورد نظر:</h2>
        <label className=" flex-row flex  justify-between  items-center gap-2 2xl:w-[79%] xl:[59%] md:w-[79%] h-8 shadow-md px-3 rounded-md ">
          <input
            type="text"
            className=" placeholder:text-[10px] placeholder:font-thin outline-none placeholder:text-[#707070]"
            placeholder="جستجوی شهر مورد نظر"
          />
          <img src="/svg/search.svg" alt="" className="w-4 h-4" />
        </label>
      </div>
      <div className="flex flex-row flex-wrap justify-between items-center   w-full  mt-9">
        {cityCategories.map((item,index)=>{
            return(
                <label
                key={index}
                className="flex items-center justify-center  2xl:text-base xl:text-base md:text-[10px] lg:text-sm font-medium 2xl:w-[17%] xl:w-[17%] md:w-[17%]"
              >
                <input
                  type="radio"
                  value={item.value}
                  name="radio-5"
                  className="radio radio-success bg-[#DDFFF8] border-none  ml-4"
                  defaultChecked
                />
                {item.label}
              </label>
            )
        })

        }
      </div>
    </div>
  );
};

export default SearchCategory;
