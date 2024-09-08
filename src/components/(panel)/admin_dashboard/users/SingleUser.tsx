"use client";
import React, { useState } from "react";
import Modal from "@/components/(main)/Modal";
import PersonalInformation from "./PersonalInformation";
import BankInformation from "./BankInformation";
import Button from "@/components/(main)/landing/Button";
import CustomSelect from "../comments/CustomSelect";

interface Props {
  admin: boolean;
}


const options = [
  { value: "none", label: "مشخص کردن نقش" },
  { value: "super_admin", label: "سوپر ادمین" },
  { value: "admin", label: "ادمین" },
  { value: "user", label: "کاربر" },
];

const SingleUser: React.FC<Props> = ({ admin = false }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="bg-white flex flex-row justify-between items-center 2xl:w-[98%] md:w-[95%] lg:w-[97%] font-iransansNumber mx-auto my-6 rounded-md py-2 px-5 border-r-2 border-[#01A657]  cursor-pointer"
     
    >
      <div className="flex flex-row justify-between items-center 2xl:w-[23%] md:w-[31%] lg:w-[33%]"  onClick={toggleModal}>
        <div className="avatar">
          <div className="2xl:w-12 2xl:h-12 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full">
            <img src="/image/dashboard/Profile._image.svg" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="2xl:text-base xl:text-base md:text-xs lg:text-sm font-medium">
            الهه علی نیا
          </p>
          <p className="2xl:text-xs xl:text-xs md:text-[8px] lg:text-xs font-light mt-1">
            تاریخ عضویت : 1403.02.16{" "}
          </p>
        </div>
        <Modal show={showModal} onClose={toggleModal}>
          <dialog className="w-full flex flex-col  items-center font-iransansNumber rounded-xl ">
            <div className="   2xl:w-[88.5%] xl:w-[88.5%] md:w-[80%] mx-auto my-4 h-[513px] py-11 ">
              <div className="my-0 mx-auto w-[88.5%]">
                <div className="flex flex-row justify-between items-center 2xl:w-[25%] xl:w-[15%] md:w-[22%]  lg:w-[20%] mb-8 ">
                  <img src="/svg/person.svg" alt="" />
                  <h5 className="2xl:text-sm xl:text-sm md:text-xs lg:text-sm font-regular">
                    اطلاعات فردی
                  </h5>
                </div>
              </div>
              <PersonalInformation />
              <BankInformation />
            </div>
            <div className="flex flex-row justify-end items-center w-[80%] mb-5 mx-auto">
              <Button
                bgColor="bg-[#01A657]"
                titleBtn="ثبت اطلاعات"
                width="w-[30%]"
                fontSize="text-sm font-medium"
                textColor="text-white"
                borderRadius="rounded-md"
                padding=" py-2"
              />
            </div>
          </dialog>
        </Modal>
      </div>
      {
        admin ? <CustomSelect options={options} defaultValue={options[0]}/>:null
      }
    </div>
  );
};

export default SingleUser;
