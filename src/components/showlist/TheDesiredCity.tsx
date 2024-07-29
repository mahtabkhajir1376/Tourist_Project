import React from 'react';   

interface RadioOption {   
  label: string;   
  value: string;   
}   

const categories: RadioOption[] = [   
  { label: ' اردبیل ', value: 'Tourism' },   
  { label: ' رامسر ', value: 'forest' },   
  { label: ' کیش ', value: 'coastal city' },   
  { label: ' قشم ', value: 'port town' },   
];   

const otherCategories: RadioOption[] = [   
  { label: ' مشهد ', value: 'pilgrimage' },   
  { label: ' اصفهان ', value: 'Tourist town' },   
  { label: ' یزد ', value: 'ancient city' },   
  { label: ' تهران  ', value: 'Capital' },   
];   

const TravelCategory: React.FC = () => {   
  return (   
    <div className="mt-20 font-iransansNumber">   
      <div className="flex flex-col sm:flex-row w-full max-w-lg mx-auto mb-4 items-center  ">   
        <h2 className=" text-base">شهر مورد نظر:</h2>   
        <div className="relative flex-grow mt-2   ml-[14px] mr-[14px]">  
          <input   
            type="text"   
            placeholder="جست و جوی شهر مورد نظر"   
            className="bg-white shadow-md  w-[320px] h-8 rounded-md pl-10 pr-4 font-iransansNumber font-thin text-xs"   
          />   
          <img 
            src="/svg/search.svg" 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4" 
            alt="search icon"
          />   
        </div>   
      </div>   

      <div className="flex flex-wrap justify-around mt-6">   
        {categories.map((category) => (   
          <label key={category.value} className="flex items-center w-1/2 sm:w-auto mb-2">   
            <input 
              type="radio" 
              value={category.value} 
              name="radio-5" 
              className="radio radio-success bg-[#DDFFF8] border-none" 
              defaultChecked 
            />  
            <span className="ml-1 text-base font-medium mr-3">{category.label}</span>   
          </label>   
        ))}   
      </div>   

      <div className="flex flex-wrap justify-around mt-4">   
        {otherCategories.map((category) => (   
          <label key={category.value} className="flex items-center w-1/2 sm:w-auto mb-2">   
            <input 
              type="radio" 
              value={category.value} 
              name="radio-5" 
              className="radio radio-success bg-[#DDFFF8] border-none" 
              defaultChecked 
            />  
            <span className="ml-1 text-base font-medium mr-3">{category.label}</span>   
          </label>   
        ))}   
      </div>   
    </div>                   
  );   
};   

export default TravelCategory;