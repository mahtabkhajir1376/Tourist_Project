import React from 'react'
import HeaderRefund from '@/components/Ticketrefund/HeaderRefund'
import ProgressBar from '@/components/Ticketrefund/ProgressBar'
import Info from '@/components/Ticketrefund/Info'

export default function page() {
  return (
    <>
    <div className='min-h-screen  bg-gray-100 font-iransansNumber p-8'>
        <HeaderRefund/>
        <ProgressBar/>
    <Info/>
    </div>
    </>
  )
}
