import React from "react";


type Props ={
    position:string
}

const HeartCheckbox:React.FC<Props> = ({position}) => {
  return (
    <label className={`relative inline-flex items-center cursor-pointer ${position}`}>
      <input type="checkbox" className="sr-only peer" />
      <div className="w-8 h-8 flex items-center justify-center text-white peer-checked:text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29 30"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5996 12.9806H20.5704C20.0874 12.9631 19.7083 12.5595 19.7246 12.0765C19.7619 10.967 19.2194 10.2471 18.2733 10.1503C17.7926 10.1013 17.4426 9.67197 17.4916 9.19131C17.5418 8.7118 17.9734 8.3583 18.4518 8.40964C20.3278 8.60097 21.5423 10.0978 21.4734 12.1348C21.4571 12.6085 21.0686 12.9806 20.5996 12.9806ZM20.5039 4.33097C18.4973 3.6893 15.7194 3.9553 13.9858 5.9223C12.1646 3.9693 9.48127 3.6858 7.4886 4.33214C2.9211 5.80214 1.4966 11.0941 2.79627 15.153V15.1541C4.84727 21.537 11.6664 24.9798 14.0021 24.9798C16.0869 24.9798 23.1768 21.6011 25.2044 15.153C26.5041 11.0953 25.0761 5.8033 20.5039 4.33097Z"
          />
        </svg>
      </div>
    </label>
  );
};

export default HeartCheckbox;
