import React from 'react';


const TourCard:React.FC=()=> {
  return (
    <div className='flex flex-row justify-around items-center w-80 h-48'>
        <img src="/image/image.png" alt="" />
        <div>
            <span className='text-xl '>تور 3 روزه</span>
            <h5 className='text-[22px] my-2 font-semibold'>کاشان</h5>
            <span className='text-xl'>20 ظرفیت</span>
        </div>
    </div>
  )
}

export default TourCard;