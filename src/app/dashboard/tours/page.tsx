import React from 'react'
import HeaderAddtour from '@/components/addtour/HeaderAddtour'
import FixedTours from '@/components/addtour/FixedTours'
import Pagination from '@/components/dashboard/comments/Pagination'
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
