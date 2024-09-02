import React from 'react'
import HeaderRefund from '@/components/Ticketrefund/HeaderRefund'
import TicketRefundone from '@/components/Ticketrefund/TicketRefundone'
import ProgressBar from '@/components/Ticketrefund/ProgressBar'

export default function Page() {
  return (
    <>
      <div className="min-h-screen  bg-gray-100 font-iransansNumber p-8 ">
        
        <HeaderRefund />
        <ProgressBar/>

        <div className="">
          <TicketRefundone />
        </div>
      </div>
    </>
  )
}
