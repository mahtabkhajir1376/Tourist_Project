import React from 'react';  

interface RadioOption {  
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
    <div className="mt-20 mx-4 sm:mx-8 md:w-1/2 lg:w-[428px] xl:w-[500px] 2xl:w-[600px] h-auto">  
      <h2 className="font-iransans medium text-base mb-4"> دسته بندی ها : </h2>  
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">  
        {categories.map((category) => (  
          <label key={category.value} className="flex items-center text-base font-medium leading-6">  
            <input type="radio" name="category" value={category.value} className="radio radio-success w-5 h-5" />  
            <span className=" text-right text-base font-medium leading-6">{category.label}</span>  
          </label>  
        ))}  
      </div>  
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 mt-2">  
        {otherCategories.map((category) => (  
          <label key={category.value} className="flex items-center text-base font-medium leading-6">  
            <input type="radio" name="category" value={category.value} className="radio radio-success w-5 h-5" />  
            <span className=" text-right text-base font-medium leading-6">{category.label}</span>  
          </label>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default TravelCategory;  
