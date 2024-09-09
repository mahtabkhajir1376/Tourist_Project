import React from 'react'
import HeaderRefund from '@/components/Ticketrefund/HeaderRefund'
import ProgressBar from '@/components/Ticketrefund/ProgressBar'
import Ticketselection from '@/components/Ticketrefund/Ticketselection'

export default function page() {
  return (
    <>
    <div className=' min-h-screen  bg-gray-100 font-iransansNumber p-8 text-base font-medium leading-8 '>
    <HeaderRefund/>
    <ProgressBar/>
    <Ticketselection/>
    </div>
    </>
  )
}
