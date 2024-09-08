import React from 'react';
import Link from 'next/link';

function page() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h4 className='font-demiBold text-lg mt-6'>در حال حاضر هیچ توری رو تو سفرجو رزرو نکردی ! </h4>
      <div className='flex flex-row justify-center items-center'>
      <Link href="" className='bg-gradient-to-r from-[#7B4794] from-30% to-[#01A688] to-50%  text-transparent  bg-clip-text text-base font-regular my-10'>بریم تور های سفرجو رو نشونت بدم </Link>
      <img src="/svg/arrow-without-reserv.svg" alt="" className='mr-2' />
      </div>
        <img src="/image/Panel/without reservation.svg" alt="" className='mb-28' />
    </div>
  )
}

export default page;