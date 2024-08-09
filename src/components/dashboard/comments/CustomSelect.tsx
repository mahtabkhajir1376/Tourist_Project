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
      borderRadius: "12px",
  
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
          className="block cursor-pointer w-6 h-6"
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
    className="shadow-md"
  />

  )
}

export default CustomSelect