import React from 'react'
import Navbar from '@/components/(main)/Navbar'
import Support from '@/components/(main)/Support/Support'

export default function page() {
  return (
    <>
    <div className='bg-[#FCFCFC]'>
    <Navbar />
    <div className='font-iransansNumber'>
    <Support/>
    </div>
    </div>
    </>
  )
}
