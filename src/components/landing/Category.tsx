import React from 'react'
import SingleCategory from './SingleCategory'

const Category:React.FC=()=> {


type data ={
    title:String,
    src:string
    imageHeight?:string
}

type categoryDate =data[]

const categoryDate:categoryDate=[
    {title:"جنگلی",src:"/image/forest.png"},
    {title:"ساحلی",src:"/image/beach.png",imageHeight:"h-14"},
    {title:"زیارتی",src:"/image/mosque.png",imageHeight:"h-14"},
    {title:"بومگردی",src:"/image/boom.png"},
    {title:"تاریخی",src:"/image/history.png"},
    {title:"خارجی",src:"/image/forien.png"},
]

  return (
    <div className='flex flex-row justify-around items-center my-20 w-[83%] mx-auto'>
        
{
  categoryDate.map((item)=>{
    return(
      <SingleCategory title={item.title} imageSrc={item.src} imageHeight={item.imageHeight}/>
    )
  })
}
    </div>
  )
}

export default Category