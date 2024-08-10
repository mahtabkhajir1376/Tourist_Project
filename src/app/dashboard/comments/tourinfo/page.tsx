import React from 'react'
import HeaderTour from '@/components/TourInformation/HeaderTour'
import TourdetailsCard from '@/components/TourInformation/TourdetailsCard'
import Thelevelofusersatisfaction from '@/components/TourInformation/Thelevelofusersatisfaction'
import Annualincomechart from '@/components/TourInformation/Annualincomechart'

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