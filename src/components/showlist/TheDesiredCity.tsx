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
    <div className="mt-28 font-iransansNumber">   
      <div className="flex flex-row justify-between items-center  mx-auto my-0 w-full ">  
         
        <h2 className=" text-base font-medium w-[30%]">شهر مورد نظر:</h2>   
        <label className=" flex-row flex  justify-between  items-center gap-2 w-[85%] h-8 shadow-md px-3 rounded-md ">
        <input type="text" className=" placeholder:text-[10px] placeholder:font-thin outline-none placeholder:text-[#707070]" placeholder="جستجوی شهر مورد نظر"  />
        <img src="/svg/search.svg" alt="" className="w-4 h-4" />
      </label>
      </div>   

      <div className="flex flex-wrap justify-between mt-6 w-full">   
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

      <div className="flex flex-wrap justify-between mt-4 w-full">   
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