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
    <footer className='font-iransans bg-white flex flex-col justify-center items-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-12 xl:py-24 2xl:px-16 2xl:py-28' dir='ltr'>
      <div className='w-full max-w-screen-xl mx-auto flex flex-col gap-8 sm:flex-row sm:justify-between items-center mb-2'>
        <div className='flex flex-col gap-6 sm:w-1/3 justify-center items-center'>
          <p className='text-lg font-medium pb-2 text-center sm:text-left'>ما را در شبکه های اجتماعی دنبال کنید</p>
          <div className='flex flex-wrap gap-6 justify-center items-center'>
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.url}>
                <img src={icon.imageSrc} alt="" className='w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-8 xl:h-8' />
              </a>
            ))}
          </div>
          <p className='text-sm font-medium mt-6 text-center sm:text-left'>
            تهران . خیابان نلسون ماندلا ساختمان اداری سفرجو . پلاک 12
          </p>
        </div>

        <div className='flex flex-col gap-8 sm:flex-row sm:gap-16 sm:w-2/3 justify-center'>
          <div className='flex flex-col sm:w-1/3 items-center ml-14'>
            <h2 className='text-lg font-medium mb-6 text-center sm:text-center'>ارتباط با ما</h2>
            <ContactInfo />
          </div>

          <div className='flex flex-col sm:w-1/3'>
            <h2 className='text-lg font-medium mb-6 sm:text-center text-center'>خدمات مشتریان</h2>
            <ul className='text-sm font-normal space-y-4 text-center'>
              {customerServices.map((service, index) => (
                <li key={index}>
                  <a href={service.url} className="text-gray-800 hover:underline">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col sm:w-1/3'>
            <h2 className='text-lg font-medium mb-6 text-center sm:text-center'>مقصد های پر تکرار</h2>
            <ul className='text-sm font-normal space-y-4 text-center'>
              {frequentDestinations.map((destination, index) => (
                <li key={index}>
                  <a href={destination.url} className="text-gray-800 hover:underline">
                    {destination.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full mt-8 text-right'>
        <a href="#" className='bg-gradient-to-r from-purple-600 to-teal-500 text-transparent bg-clip-text text-sm font-normal'>
          کلیه حقوق این سرویس (وب‌سایت) محفوظ و متعلق به شرکت سفرهای سفرجو می‌باشد
        </a>
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
    <div className='flex flex-col gap-4'>
      {contactItems.map((item, index) => (
        <div key={index} className='flex items-center gap-2'>
          <img src={item.imageSrc} alt="" className='w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-6 xl:h-6' />
          <p className='text-sm font-normal'>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
