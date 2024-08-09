import React from 'react';
import SearchCategory from '@/components/dashboard/banners/city_banners/SearchCategory';
import Header from '@/components/dashboard/banners/Header';
import UplodeBanner from '@/components/dashboard/banners/UplodeBanner';
import Button from '@/components/landing/Button';



const banner = ["بنر شماره 1", "بنر شماره 2", "بنر شماره 3"];


function page() {
  return (
    <div className='w-full'>
        <Header/>
        <div>
            {banner.map((item,index)=>{
                return(
                    <div key={index} className="flex flex-row w-[74%] mr-16 my-4 justify-start items-center ">
                    <UplodeBanner numberOfimage={item} margin='m-0' width='w-[36%]' />
                    <SearchCategory />
                  </div>

                )
            })

            }
        </div>
        <div className="flex flex-row justify-end w-[88.5%] mx-auto my-0 ">
        <Button
          bgColor="bg-[#01A657]"
          borderRadius="rounded-md"
          fontSize="font-medium text-base font-iransansNumber "
          titleBtn="ثبت نهایی"
          width="w-[29%] h-[56px]"
          padding="px-6 py-2"
          textColor="text-white"
          margin="my-11"
        />
      </div>

    </div>
  )
}

export default page