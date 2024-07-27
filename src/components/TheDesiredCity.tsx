import React from 'react';  

interface RadioOption {  
  label: string;  
  value: string;  
}  

const categories: RadioOption[] = [  
  { label: ' اردبیل ', value: 'beach' },  
  { label: ' رامسر ', value: 'forest' },  
  { label: ' کیش ', value: 'eco' },  
  { label: ' قشم ', value: 'eco' },  
];  

const otherCategories: RadioOption[] = [  
  { label: ' مشهد ', value: 'historical' },  
  { label: ' اصفهان ', value: 'pilgrimage' },  
  { label: ' یزد ', value: 'foreign' },  
  { label: ' تهران  ', value: 'eco' },  
];  

const TravelCategory: React.FC = () => {  
  return (  
    <div className="mt-20">  
      <div className="flex flex-col sm:flex-row w-full max-w-lg mx-auto mb-4 items-center">  
        <h2 className="font-iransans text-base">شهر مورد نظر:</h2>  
        <div className="relative flex-grow mt-2 sm:mt-0">  
          <input  
            type="text"  
            placeholder=" جست و جوی شهر مورد نظر  "  
            className="bg-white shadow-md w-full h-8 rounded-md font-iransans text-sm pl-10 pr-2"  
          />  
          <img src="/svg/search.svg" className="absolute left-2 top-1/2 transform -translate-y-1/2" />  
        </div>  
      </div>  

      <div className="flex flex-wrap justify-around mt-6">  
        {categories.map((category) => (  
          <label key={category.value} className="flex items-center w-1/2 sm:w-auto mb-2">  
            <input type="radio" name="radio-5" value={category.value} className="radio radio-success w-5 h-5" />  
            <span className="ml-1 text-base font-medium">{category.label}</span>  
          </label>  
        ))}  
      </div>  

      <div className="flex flex-wrap justify-around mt-4">  
        {otherCategories.map((category) => (  
          <label key={category.value} className="flex items-center w-1/2 sm:w-auto mb-2">  
            <input type="radio" name="radio-5" value={category.value} className="radio radio-success w-5 h-5" />  
            <span className="ml-1 text-base font-medium">{category.label}</span>  
          </label>  
        ))}  
      </div>  
    </div>                  
  );  
};  

export default TravelCategory;  
