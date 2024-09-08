import React from 'react';  

export interface RadioOption {  
  label: string;  
  value: string;  
}  

const categories: RadioOption[] = [  
  { label: 'ساحلی', value: 'beach' },  
  { label: 'جنگلی', value: 'forest' },  
  { label: 'بوم گردی', value: 'eco' },  
];  

const otherCategories: RadioOption[] = [  
  { label: 'تاریخی', value: 'historical' },  
  { label: 'زیارتی', value: 'pilgrimage' },  
  { label: 'خارجی', value: 'foreign' },  
];  

const TravelCategory: React.FC = () => {  
  return (  
    <div className="mt-24  h-auto   font-iransansNumber ">  
      <h2 className=" font-medium text-base mb-5 "> دسته بندی ها : </h2>  
      <div className="grid grid-cols-2 sm:grid-cols-3  font-iransansNumber ">  
        {categories.map((category) => (  
          <label key={category.value} className="flex items-center text-base font-medium leading-6  "> 
           <input
            type="radio"
            value={category.value}
            name="radio-5"
            className="radio radio-success bg-[#DDFFF8] border-none"
            defaultChecked
          />  
            <span className=" text-right text-base font-medium leading-6 mr-3 ">{category.label}</span>  
          </label>  
        ))}  
      </div>  
      <div className="grid grid-cols-2 sm:grid-cols-3  mt-3  font-iransansNumber ">  
        {otherCategories.map((category) => (  
          <label key={category.value} className="flex items-center text-base font-medium leading-6">  
           <input
            type="radio"
            value={category.value}
            name="radio-5"
            className="radio radio-success bg-[#DDFFF8] border-none"
            defaultChecked
          /> 
            <span className=" text-right text-base font-medium leading-6 mr-3 ">{category.label}</span>  
          </label>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default TravelCategory;  
