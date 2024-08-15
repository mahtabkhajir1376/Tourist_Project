"use client"
import React from 'react';
import Select, { components } from "react-select";


const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      padding: "8px 16px",
      width: "full",
  
      "&:hover": {
        borderColor: "#85d2ad",
      },
      dropdownIndicator: (provided) => ({
        ...provided,
        padding: 4,
      }),
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#01A657" : "white",
      color: state.isSelected ? "white" : "black",
    }),
  };

  const options = [
    { value: "All option", label: "همه موارد" },
    { value: "Awaiting review", label: "در انتظار بررسی" },
    { value: "accepted", label: " تائید شده" },
    { value: "not_confirmed", label: "تائید نشده" },
  ];


  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img
          src="/svg/arrowdown.svg"
          alt=""
          className="block cursor-pointer 2xl:w-6 2xl:h-6 md:w-3 md:h-3 lg:w-5 lg:h-5 "
        />
      </components.DropdownIndicator>
    );
  };




function CustomSelect() {
  return (
    <Select
    options={options}
    styles={customStyles}
    components={{ DropdownIndicator, IndicatorSeparator: null }}
    defaultValue={options[0]}
    className="shadow-md  2xl:w-[20%] md:w-[21%] md:px-2 2xl:text-sm md:text-[10px] lg:text-xs xl:text-sm bg-white rounded-xl "
  />

  )
}

export default CustomSelect;