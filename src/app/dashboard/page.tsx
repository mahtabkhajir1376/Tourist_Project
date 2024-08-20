import React from 'react';
import HeaderDashboard from '@/components/Dashboard/HeaderDashboard';
import Option from '@/components/Dashboard/Option';
import Chartofannualrefundamount from '@/components/Dashboard/Chartofannualrefundamount'
import Salespercentageoftours from '@/components/Dashboard/Salespercentageoftours'
import Annualincomestatus from '@/components/Dashboard/Annualincomestatus'

function page() {
  return (
    <>
    <div></div>
      <div className='font-iransans  w-screen  '>
        <div className='flex flex-col justify-center items-center'>
          <HeaderDashboard />
          <div className='flex flex-row justify-between '>
            <Option />
            <Chartofannualrefundamount />
          </div>
        </div>
        <div className='flex flex-row '>
          <Salespercentageoftours />
          <Annualincomestatus percentage={66} />
        </div>
        <div/>
      </div>
    </>
  )
}

export default page;