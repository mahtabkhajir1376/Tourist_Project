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
    <div className="  mt-[75px]  ">
        <div className='flex flex-row w-[428px] h-[32px] justify-between '>
      <h2 className=" font-iransans medium text-base  mb-4"> شهر مورد نظر : </h2>
      <input type="text" placeholder=' جست و جوی شهر مورد نظر  ' className='bg-white shadow-md shadow-slate-300 w-[274px] h-[32px] rounded-md 	font-iransans  text-[10px] font-thin gap-2.5 p-2' />
      </div>
      <div className=" flex justify-between  mr-[32px]  ml-[140px] items-center mt-[22px] ">
        {categories.map((category) => (
          <label key={category.value} className="flex items-center w-[80px] h-[24px] ">
            <input
              type="radio"
              value={category.value}
              className="form-radio  accent-[#7B4794] m-2 "
            />
            <span className="ml-2 text-right text-base font-medium leading-6">{category.label}</span>
          </label>
        ))}
      </div>
      <div className=" flex justify-between  mr-[32px]  ml-[140px] items-center mt-[22px] ">
        {otherCategories.map((category) => (
          <label key={category.value} className="flex items-center text-base font-medium leading-6 ">
            <input
              type="radio"
              value={category.value}
              className="form-radio  accent-[#7B4794] m-2  "
            />
            <span className="ml-2 text-right text-base font-medium leading-6">{category.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TravelCategory;