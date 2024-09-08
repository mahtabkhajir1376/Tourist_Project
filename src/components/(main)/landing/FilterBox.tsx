import Button from '@/components/(main)/landing/Button';

const FilterBox:React.FC=()=> {

type data ={
    title:string | JSX.Element
    width:string
}
 
type dataButton=data[]

const dataButton:dataButton=[
    {title:"شهر مورد نظر",width:"xl:w-36 sm:w-24 md:w-32 lg:w-28"},
    {title:"تاریخ رفت",width:"xl:w-36 sm:w-24 md:w-32"},
    {title:"تاریخ برگشت",width:"xl:w-36 sm:w-24 md:w-32"},
    {title:"تعداد نفرات",width:"xl:w-36 sm:w-24 md:w-32"},
    {title:<img src='/svg/search.svg' className='mr-1'/>,width:"xl:w-12 sm:w-12 md:w-12" }
]


  return (
    <div className='bg-white flex flex-row justify-around items-center xl:w-[53%] sm:w-[74%]  md:w-[80%] md:right-[10%]  lg:w-[60%] lg:right-[20%] mx-auto absolute xl:top-[93%] xl:right-[24%] xl:px-2  xl:py-3 sm:px-1 sm:py-2 sm:top-[95%] sm:right-[12%]  rounded-full shadow-xl'>
        {
            dataButton.map((Btn)=>{
                return <Button bgColor='bg-white' titleBtn={Btn.title} fontSize='xl:text-sm sm:text-xs md:text-sm ' border='border-[1px] border-[#01A657]' width={Btn.width} borderRadius='rounded-full' padding='py-3 px-2 '/>
            })
        }

    </div>
  )
}

export default FilterBox;