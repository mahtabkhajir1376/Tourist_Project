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
    <div className=" mt-[75px] mr-[32px] ml-[32px] w-[428px] h-[122px] gap-[22px] ">
        <div className='w-[101px] h-[24px] '>
      <h2 className=" font-iransans medium text-base  mb-4"> دسته بندی ها : </h2>
      </div>
      <div className="flex justify-between  mr-[32px]  ml-[140px] items-center mt-[22px] ">
        {categories.map((category) => (
          <label key={category.value} className="flex items-center">
            <input
              type="radio"
              value={category.value}
              className="form-radio  accent-[#7B4794] m-2 "
            />
            <span className="ml-2 text-right">{category.label}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-between mr-[32px]  ml-[140px] items-center ">
        {otherCategories.map((category) => (
          <label key={category.value} className="flex items-center">
            <input
              type="radio"
              value={category.value}
              className="form-radio  accent-[#7B4794] m-2 "
            />
            <span className="ml-2 text-right">{category.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TravelCategory;