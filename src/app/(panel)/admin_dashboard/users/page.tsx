"use client";
import React, { useState } from "react";
import Users from "@/components/admin_dashboard/users/Users";
import SearchBox from "@/components/(panel)/admin_dashboard/users/SearchBox";
import Pagination from "@/components/(panel)/admin_dashboard/comments/Pagination";
import Modal from "@/components/(main)/Modal";
import PersonalInformation from "@/components/(panel)/admin_dashboard/users/PersonalInformation";
import BankInformation from "@/components/(panel)/admin_dashboard/users/BankInformation";
import Button from "@/components/(main)/landing/Button";

function page() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-full   relative h-lvh  overflow-y-auto  font-iransansNumber  ">
      <SearchBox />
      <div className="flex flex-row justify-start items-center 2xl:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] mx-auto my-0">
        <button
          className="flex flex-row justify-center items-center bg-white 2xl:w-[19%] md:w-[25%] lg:w-[20%] xl:w-[20%] 2xl:py-4 lg:py-3 md:py-2 rounded-xl"
          onClick={toggleModal}
        >
          <img src="/svg/showlist/positive_icon.svg" alt="md:w-2 md:h-2 lg:w-3 lg:h-3" />
          <p className="mr-2 text-[#01A657] 2xl:text-sm md:text-[10px] lg:text-xs font-medium">
            اضافه کردن کاربر
          </p>
        </button>
        <Modal show={showModal} onClose={toggleModal}>
          <dialog className="w-full flex flex-col  items-center font-iransansNumber rounded-xl ">
            <div className="   2xl:w-[88.5%] xl:w-[88.5%] md:w-[80%] mx-auto my-4 h-[513px] py-6 ">
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

      <Users />

      <Pagination />
    </div>
  );
}
export default page;
