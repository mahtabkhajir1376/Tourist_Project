"use client"
import React, { useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const Support: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md flex flex-col items-center w-[494px] h-[550px] rounded-md">
          <h3 className="text-lg font-semibold mb-2">تماس تلفنی با پشتیبانی</h3>
          <img
            src="/image/Panel/Support/supportwoman.svg"
            alt="Call Support"
            className="w-[432px] h-[287px] mb-6"
          />
          <p className="text-[#333333] text-sm text-center">
            مشکلی برایت پیش اومده؟ <br /> ما 24 ساعته پاسخگوی شما هستیم
          </p>
          <div className="mt-auto">
            <button
              className="bg-[#01A657] text-white py-2 px-4 rounded-lg w-[440px] h-[56px]"
              onClick={openModal}
            >
              تماس با پشتیبانی
            </button>
          </div>
        </div>
        <div className="bg-white p-6 shadow-md flex flex-col items-center w-[494px] h-[550px] rounded-md">
          <h3 className="text-lg font-semibold mb-2">ارسال ایمیل به پشتیبانی</h3>
          <img
            src="/image/Panel/Support/Supportman.svg"
            alt="Email Support"
            className="w-[432px] h-[287px] mb-6"
          />
          <p className="text-[#333333] text-center text-sm">
            مشکلی برایت پیش اومده؟
            <br />
            ما 24 ساعته پاسخگوی شما هستیم
          </p>
          <div className="mt-auto">
            <button className="bg-[#01A657] text-white py-2 px-4 rounded-lg w-[440px] h-[56px]">
              ارسال ایمیل
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-[350px] h-[150px] relative">
            <TiDeleteOutline
              className="absolute top-0 left-0 m-2 bg-red-500 text-white p-1 rounded-full cursor-pointer"
              size={24}
              onClick={closeModal}
            />
            <p className="text-center text-sm mb-4">تماس با پشتیبانی</p>
            <p className="text-center text-lg font-medium">021-46840895</p>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default Support;
