import React from 'react';
import SearchCategory from '@/components/(panel)/admin_dashboard/banners/city_banners/SearchCategory';
import Header from '@/components/(panel)/admin_dashboard/banners/Header';
import UplodeBanner from '@/components/(panel)/admin_dashboard/banners/UplodeBanner';
import Button from '@/components/(main)/landing/Button';



const banner = ["بنر شماره 1", "بنر شماره 2", "بنر شماره 3"];


function page() {
  return (
    <div className='w-full  relative h-lvh  overflow-y-auto'>
        <Header/>
        <div className='w-full'>
            {banner.map((item,index)=>{
                return(
                    <div key={index} className="flex flex-row 2xl:w-[74%] md:w-[87%] 2xl:mr-16 md:mr-10 my-4 justify-start items-center ">
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
          fontSize="font-medium 2xl:text-sm xl:text-sm md:text-xs lg:text-sm font-iransansNumber "
          titleBtn="ثبت نهایی"
          width="2xl:w-[16%] xl:w-[16%] md:w-[25%] lg:w-[23%] h-10"
          padding="px-6 py-2"
          textColor="text-white"
          margin="my-11"
        />
      </div>

    </div>
  )
}

export default page