"use client"
import React from 'react';
import Select, { components } from "react-select";
import { Options } from 'react-select';
import { GroupBase } from 'react-select';

interface Props {
  options:{ value: string; label: string; }[]
  defaultValue:{},
  width:string

}


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




const CustomSelect:React.FC<Props>=({options,defaultValue,width})=> {
  return (
    <Select
    options={options}
    styles={customStyles}
    defaultValue={defaultValue}
    components={{ DropdownIndicator, IndicatorSeparator: null }}
    className={`shadow-md  md:px-2 2xl:text-sm md:text-[10px] lg:text-xs xl:text-sm bg-white rounded-xl ${width} `}
  />

  )
}

export default CustomSelect;