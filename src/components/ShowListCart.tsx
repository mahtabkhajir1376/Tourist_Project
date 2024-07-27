import React from 'react';

interface Card {
  destination: string;
  origin: string;
  price: string;
  comment: string;
  person : string;
  moreDetails: string;
  moreThenDetails :string;
  amountOfSatisfaction: string;
  src: string;
}

const cardSlider: Card[] = [
  {
    destination: ' کمپ جنگل گیسوم ',
    origin: ' مبدا تهران ',
    price: 'قیمت :1.500.000 تومان',
    comment: '35',
    moreDetails: '3 شب / طبیعت گردی / کمپ / چادر ',
    moreThenDetails:'امکانات : غذا / تورلیدر / عکاس',
    amountOfSatisfaction: '3.2 ',
    person : '12' ,
    src: '/image/GreenMountian.png',
  },
  {
    destination: ' کمپ جنگل گیسوم ',
    origin: ' مبدا تهران ',
    price: 'قیمت :1.500.000 تومان',
    comment: '35',
    moreDetails: '3 شب / طبیعت گردی / کمپ / چادر ',
    moreThenDetails:'امکانات : غذا / تورلیدر / عکاس',
    person : '12' ,
    amountOfSatisfaction: '3.2 ',
    src: '/image/Road.png',
  },
  {
    destination: ' کمپ جنگل گیسوم ',
    origin: ' مبدا تهران ',
    price: 'قیمت :1.500.000 تومان',
    comment: '35',
    moreDetails: '3 شب / طبیعت گردی / کمپ / چادر ',
    moreThenDetails:'امکانات : غذا / تورلیدر / عکاس',
    person : '12' ,
    amountOfSatisfaction: '3.2 ',
    src: '/image/CloudJungle.png',
  },
  
];

const ShowListCart: React.FC = () => {
  return (
    <div className="flex flex-col w-[821px]  h-[285px] gap-8  top-[100px]  ">
      {cardSlider.map((card, index) => (
        <div key={index} className="  gap-1.5  bg-white  p-[12px]   ">
          <div className="  overflow-hidden  flex flex-row justify-between ">
          <div className="flex flex-row ">
              <img src={card.src} alt={card.destination} className=" w-[280px]  h-[280px]  rounded-xl " />
            </div>

            <div  className=' flex flex-row  w-[511px]  h-[231px]   mb-[35px] justify-between items-center  '>
            <div className="   flex flex-col text-base font-medium w-[271px] h-[188px]  gap-[20px]  mt-[12px]  mr-[15px]   mb-3 ">
              <p className="">{card.destination}</p>
              <p className=' '>{card.moreDetails}</p>
              <p className=''>{card.moreThenDetails}</p>
              <p className=''>{card.price}</p>
              </div>

              <div className='  felx  flex-col   justify-end  items-end  text-base font-medium  w-[135px]  h-[184px]   mr-[15px]   mb-[35px] gap-[5px] '>

              <div className='  flex  flex-row   justify-end  items-end  gap-[20px]  ml-2  mb-4   w-[70px]   h-[32px] '>
              <p className=''>{card.amountOfSatisfaction}</p>
              <img src="/image/iconShowlistcartStar.png" alt="" className=' w-[24px] h-[24px] ' />
              </div>
              
              <div className='flex flex-row justify-end w-[70px] h-[32px] gap-[12px] items-end mb-4 ml-2 '>
              <p className=''>{card.comment}</p>
              <img src="/image/iconShowlistcartComment.png" alt="" className=' w-[24px] h-[24px]  '/>
              </div>
              <div className='flex flex-row  justify-end  w-[70px] h-[32px] gap-[12px] items-end mb-4 ml-2 '>
              <p className=''>{card.person}</p>
              <img src="/image/iconShowlistcartPerson.png" alt="" className=' w-[24px] h-[24px] ' />
              </div>
              <div className='flex flex-row justify-end items-center w-[104px] h-[32px] gap-[12px]  mb-4 '>
              <p className=''>{card.origin}</p>
              <img src="/image/iconShowlistcartLocation.png" alt="" className=' w-[24px] h-[24px] '/>
              </div>
              </div>
              {/* <div className="flex flex-col justify-center  ">
            <button className="bg-[#01A657] text-white  rounded-md w-[489px] h-[42px] gap-2.5 "> مشاهده و رززو  </button>
          </div>  */}
              </div>
          </div>
           
        </div>
      ))}
    </div>
  );
};

export default ShowListCart;