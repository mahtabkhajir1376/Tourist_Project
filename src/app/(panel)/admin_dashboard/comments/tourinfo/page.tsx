import React from 'react'
import HeaderTour from '@/components/(panel)/TourInformation/HeaderTour'
import TourdetailsCard from '@/components/(panel)/TourInformation/TourdetailsCard'
import Thelevelofusersatisfaction from '@/components/(panel)/TourInformation/Thelevelofusersatisfaction'
import Annualincomechart from '@/components/(panel)/TourInformation/Annualincomechart'

function page() {
  return (
    <>
      <div className=' mt-[15px]  mb-[30px] p-6  w-full  '>
        <HeaderTour />
        <TourdetailsCard />
        <div className='flex flex-row mt-8 w-[1000px] '>
          <Thelevelofusersatisfaction />
          <Annualincomechart />
        </div>
      </div>
    </>
  )
}

export default page