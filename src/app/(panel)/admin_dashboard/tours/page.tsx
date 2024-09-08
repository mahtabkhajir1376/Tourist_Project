import React from 'react'
import HeaderAddtour from '@/components/(panel)/admin_dashboard/addtour/HeaderAddtour'
import FixedTours from '@/components/(panel)/admin_dashboard/addtour/FixedTours'
import Pagination from '@/components/(panel)/admin_dashboard/comments/Pagination'
export default function page() {
  return (
    <>
      <div className='font-iransansNumber w-full  text-sm font-regular '>
        <HeaderAddtour />
        <FixedTours />
        <div className='mt-3'>
        <Pagination />
        </div>
      </div>
    </>
  )
}
