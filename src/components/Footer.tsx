import React from 'react';  
  
interface SocialIcon {  
  url: string;  
  imageSrc: string;  
}  
  
interface Link {  
  url: string;  
  label: string;  
}  
  
const socialIcons: SocialIcon[] = [  
  { url: "/", imageSrc: "/image/Instagramm.png" },  
  { url: "/", imageSrc: "/image/Twitter.png" },  
  { url: "/", imageSrc: "/image/youtube.png" },  
  { url: "/", imageSrc: "/image/linkdin.png" }  
];   
  
const frequentDestinations: Link[] = [  
  { url: "/", label: "تورهای شمال" },  
  { url: "/", label: "تورهای خارجی" },  
  { url: "/", label: "تور های کویر" }  
];  
  
const customerServices: Link[] = [  
  { url: "/", label: "سوالات متدوال" },  
  { url: "/", label: "مرکز پشتیبانی" },  
  { url: "/", label: "درباره ما" }  
];  
  
export default function Footer() {  
  return (  
    <footer className='font-iransans  bg-white ' dir='ltr'>  
      <div className="mx-auto w-full max-w-screen-xl p-16   ">  
        <div className='md:flex justify-between items-center '>  
          <div className='mb-6 md:mb-0  mr-[99px] ml-[51px] '>  
            <div className=' flex justify-center items-center w-[280px] h-[30px]  m-4  '>
            <p className='medium text-lg mb-[60px]'>ما را در شبکه های اجتماعی دنبال کنید  </p> 
            </div> 
            <div className='flex flex-row  justify-between items-start m-2  w-[276px] h-[31px] gap-[22px]  '>  
              {socialIcons.map((icon, index) => (  
                <img key={index} src={icon.imageSrc} alt="" className=' w-[32px] h-[31px] ' />  
              ))}  
            </div>  
            <p className='w-[358px] h-[30px] text-sm font-medium leading-7 mt-[49px]  '>  تهران . خیابان نلسون ماندلا ساختمان اداری سفرجو . پلاک 12  </p>
          </div>  
  
          <div className='grid grid-cols-2 sm:gap-6 sm:grid-cols-3  w-[687.62px] h-[220px] gap-[101px]'>  
          <div className='  flex flex-col justify-center items-center  '>  
              <h2 className='mb-6 text-[ #000000] text-lg medium  gap-[18px] flex justify-center items-center '>ارتباط با ما</h2>  
              <ContactInfo  />  
            </div>  
            <div className='  flex flex-col justify-center items-center'>  
              <h2 className='mb-6 text-lg medium text-[ #000000] '>خدمات مشتریان</h2>  
              <ul className='text-[#000000] regular text-sm leading-[30px]  flex flex-col justify-center items-center '>  
                {customerServices.map((service, index) => (  
                  <li key={index} className='mb-4'>  
                    <a href={service.url} className="nav-link">{service.label}</a>  
                  </li>  
                ))}  
              </ul>  
            </div>  
        
            <div className=' flex flex-col  justify-center items-center'>  
              <h2 className='mb-6 text-lg medium text-gray-900'>مقصد های پر تکرار</h2>  
              <ul className='text-[ #000000] regular text-sm leading-[30px] justify-center items-center '>  
                {frequentDestinations.map((destination, index) => (  
                  <li key={index} className='mb-4'>  
                    <a href={destination.url} className="nav-link">{destination.label}</a>  
                  </li>  
                ))}  
              </ul>  
            </div>  
          </div> 
        </div>  
      </div>  
      <div className='w-[515px] h-[50px] top-[476.86px] gap-2.5 ml-[65%]   '>
          <a href="" className='bg-gradient-to-r from-[#7B4794] to-[#01A688] text-transparent bg-clip-text flex flex-row justify items-center text-sm font-normal leading-[30px]'>کلیه حقوق این سرویس (وب‌سایت) محفوظ و متعلق به شرکت سفرهای سفرجو می‌باشد. </a>
        </div> 
    </footer>  
  );  
}  
  
function ContactInfo() {  
  const contactItems = [  
    { imageSrc: "/image/Email.png", text: "safarjo1403@gmail.com" },  
    { imageSrc: "/image/Tell.png", text: "(021) 468 - 686888" },  
   
  ];  
    
  return (  
    <>  
      {contactItems.map((item, index) => (  
        <div key={index} className='flex gap-[8px] '>  
          <img src={item.imageSrc} alt="" className='w-[19.33px] h-[19.33px] top-[2.33px] left-[2.33px]  mb-6 ' />  
          <p className='text-sm font-normal leading-[30px]' dangerouslySetInnerHTML={{ __html: item.text.replace('\n', '<br>') }} />  
        </div>  
      ))}  
    </>  
  );  
}
