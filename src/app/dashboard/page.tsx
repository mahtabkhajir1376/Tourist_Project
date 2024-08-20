import React from 'react';
import HeaderDashboard from '@/components/dashboard/HeaderDashboard';
import Option from '@/components/dashboard/Option';
import Chartofannualrefundamount from '@/components/dashboard/Chartofannualrefundamount'
import Salespercentageoftours from '@/components/dashboard/Salespercentageoftours'
import Annualincomestatus from '@/components/dashboard/Annualincomestatus';

function page() {
  return (
      <div className='font-iransans  w-full relative h-lvh  overflow-y-auto '>
          <HeaderDashboard />
          <div className='flex flex-row justify-between w-[88.5%] h-[350px] mx-auto   my-6 items-center '>
            <Option />
            <Chartofannualrefundamount />
        </div>
        <div className='flex flex-row w-[88.5%] mx-auto my-8 justify-between h-[480px] items-center '>
          <Salespercentageoftours />
          <Annualincomestatus percentage={66} />
        </div>
        <div/>
      </div>
  )
}

export default page;