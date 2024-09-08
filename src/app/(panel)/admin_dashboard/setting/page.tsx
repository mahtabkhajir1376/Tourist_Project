import React from 'react'
import HeaderSetting from '@/components/(panel)/admin_dashboard/Setting/HeaderSetting';
import TourdetailsForm from '@/components/(panel)/admin_dashboard/Setting/TourdetailsForm';

function page() {
  return (
    <>
    <div className='mt-[15px]  mb-[30px] p-6 w-full  '>
    <HeaderSetting/>
    <TourdetailsForm/>

    </div>
    </>
  )
}

export default page;