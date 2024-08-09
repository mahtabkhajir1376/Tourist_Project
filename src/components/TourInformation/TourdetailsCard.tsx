import React from 'react';

const TourdetailsCard: React.FC = () => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[1000px] h-[240px]">
      <div>
        <img
          src="/image/DetailsTour/TourdetailsCard/Mashhad.png"
          alt="Mashhad"
          className="h-[200px] w-[500px] object-cover rounded-xl mt-[20px] mb-[24px] mr-[20px]"
        />
      </div>

      <div className="w-1/3 p-6 mr-[25px] font-iransansNumber font-medium text-sm leading-[21px] flex flex-col justify-center gap-5 ">
        <p>تور 3 روزه مشهد</p>
        <p>زیارت حرم / بازدید کوه سنگی / و...</p>
        <p>امکانات: هتل / تورلیدر / عکاس</p>
        <p>قیمت: 2.500.000 تومان</p>
      </div>

      <div className=" flex flex-col justify-center items-center font-iransansNumber font-medium text-sm leading-[21px] gap-4">
        <div className="flex items-center">
          <p className="w-16 text-right">3.2</p>
          <img src="/svg/showlist/star-show-list.svg" alt="Rating" className="" />
        </div>
        <div className="flex items-center">
          <p className="w-16 text-right">42</p>
          <img src="/svg/showlist/chat-show-list.svg" alt="Comments" className="" />
        </div>
        <div className="flex items-center">
          <p className="w-16 text-right">هواپیما</p>
          <img src="/image/DetailsTour/TourdetailsCard/T.svg" alt="Transport" className="" />
        </div>
        <div className="flex items-center">
          <p className="w-16 text-right">مبدا تهران</p>
          <img src="/svg/showlist/Location-show-list.svg" alt="Location" className="" />
        </div>
      </div>
    </div>
  );
};

export default TourdetailsCard;