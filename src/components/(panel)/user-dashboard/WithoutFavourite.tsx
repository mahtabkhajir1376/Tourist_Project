import React from 'react';

const WithoutFavourite: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center font-iransansNumber">
      <h1 className="text-xl font-demiBold mb-4">در حال حاضر هیچ توری رو به علاقه‌مندی‌هایت اضافه نکردی!</h1>
      <div className="flex justify-center items-center mb-4">
        <img src="/image/Panel/without Favorite.svg" alt="بدون علاقه‌مندی" className="mx-auto" />
      </div>
      <div className='flex flex-row justify-center items-center mt-4'>
        <p className="bg-gradient-to-r from-[#3C005A] to-[#01A688] inline-block text-transparent bg-clip-text mr-2">
          بریم تور‌های سبزجو رو نشونت بدم
        </p>
        <img src="/image/Panel/Nextpage.svg" alt="Next" />
      </div>
    </div>
  );
}

export default WithoutFavourite;
