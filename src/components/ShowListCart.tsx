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
    <div className="flex flex-col w-[821px] h-[967px]  gap-8 top-[100px] ">
      {cardSlider.map((card, index) => (
        <div key={index} className=" w-[821px] h-[301px]  p-3 gap-1.5 ">
          <div className="  overflow-hidden  flex flex-row justify-between">
          <div className="flex flex-row">
              <img src={card.src} alt={card.destination} className=" w-[280px] h-[280px] rounded-xl " />
            </div>
            <div  className=' flex flex-row w-[511px]  h-[280px] justify-between'>

            <div className="  text-base font-medium w-[271px] h-[188px]">
              <p className="">{card.destination}</p>
              <p className=' '>{card.moreDetails}</p>
              <p className=''>{card.moreThenDetails}</p>
              <p className=''>{card.price}</p>
              </div>

              <div className='  felx flex-col text-base font-medium w-[132px] h-[184px] '>
              <p className=''>{card.origin}</p>
              <p className=''>{card.comment}</p>
              <p className=''>{card.amountOfSatisfaction}</p>
              <p className=''>{card.person}</p>
              
       <button className="mt-4 bg-[#01A657] text-white  rounded-md w-[489px] h-[42px] gap-2.5 ">
                مشاهده و رزرو
              </button>
              </div>
               
              </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowListCart;