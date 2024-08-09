import React from "react";
import { RadioOption } from "@/components/showlist/TravelCategory";


const cityCategories: RadioOption[] = [   
    { label: ' رشت ', value: 'rasht' },   
    { label: ' پاریس ', value: 'paris' },   
    { label: ' دبی ', value: 'dobey' },   
    { label: ' اصفهان  ', value: 'esfahan' },   
  ];   


const SearchCategory: React.FC = () => {
  return (
    <div className="flex flex-col w-[61%] shadow-md bg-white h-36 py-6 px-6 rounded-md mr-7">
      <div className="flex flex-row justify-between items-center  mx-auto my-0 w-full ">
        <h2 className=" text-base font-medium w-[32%]">شهر مورد نظر:</h2>
        <label className=" flex-row flex  justify-between  items-center gap-2 w-[79%] h-8 shadow-md px-3 rounded-md ">
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
                className="flex items-center justify-center text-base font-medium w-[17%]"
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
