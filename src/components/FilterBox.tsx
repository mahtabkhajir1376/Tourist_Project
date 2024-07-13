import Button from './Button';

const FilterBox:React.FC=()=> {

type data ={
    title:string | JSX.Element
    width:string
}
 
type dataButton=data[]

const dataButton:dataButton=[
    {title:"شهر مورد نظر",width:"w-40"},
    {title:"تاریخ رفت",width:"w-40"},
    {title:"تاریخ برگشت",width:"w-40"},
    {title:"تعداد نفرات",width:"w-40"},
    {title:<img src='/svg/search.svg' className='mr-1'/>,width:"w-12" }
]


  return (
    <div className='bg-white flex flex-row justify-around items-center w-[53%] mx-auto mt-[20%] px-2 py-3  rounded-full shadow-xl'>
        {
            dataButton.map((Btn)=>{
                return <Button bgColor='bg-white' titleBtn={Btn.title} fontSize='text-sm' border='border-[1px] border-[#01A657]' width={Btn.width} borderRadius='rounded-full' padding='py-3 px-2 '/>
            })
        }

    </div>
  )
}

export default FilterBox;