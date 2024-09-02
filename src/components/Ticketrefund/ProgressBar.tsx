import React from "react";

const ProgressBar: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between mt-6  mb-6  ">

<div className="flex flex-col items-center">
        <div className="flex items-center space-x-2  gap-4">
            <img src="/image/ProgressBar/refundtree.svg" alt="" />
          <span className="text-black text-[20px] font-medium">علت استرداد</span>
          
        </div>
      </div>   
      
      <div className="flex flex-col items-start justify-start">
        <div className="flex items-center space-x-2  gap-4">
            <img src="/image/ProgressBar/refundone.svg" alt="" />
          <span className="text-black text-[20px] font-medium  ">  انتخاب بلیت </span>
          
        </div>
      </div>

      
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2 gap-4">
            <img src="/image/ProgressBar/refundtwo.svg" alt="" />
          <span className="text-black text-[20px]  font-medium "> اطلاعات حساب  </span>
          
        </div>
      </div>

      
    

      
      <div className="absolute  bg-gray-200 h-1 mt-14">
        <div className="bg-gradient-to-r from-purple-500 to-green-500 h-2  w-[1356px]   rounded-lg ">
      </div>
      </div>
    </div>
  );
};

export default ProgressBar;
