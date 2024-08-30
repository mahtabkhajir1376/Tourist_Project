import React from "react";

const StarCheckbox: React.FC = () => {
  return (
    <label className={`relative inline-flex items-center cursor-pointer`}>
      <input type="checkbox" className="sr-only peer" />
      <div className="w-8 h-8 flex items-center justify-center text-white peer-checked:text-yellow-400">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 4.75C15.7761 4.75 15.4713 10.3653 13.5519 12.3493C11.6326 14.3333 5.66548 12.0649 4.83643 15.5864C4.00912 19.1097 9.37706 20.3051 10.0389 23.3279C10.7042 26.3507 7.42461 30.5978 10.227 32.7114C13.0294 34.8232 16.0461 30.0433 19 30.0433C21.9539 30.0433 24.9706 34.8232 27.773 32.7114C30.5754 30.5978 27.2975 26.3507 27.9611 23.3279C28.6247 20.3051 33.9909 19.1097 33.1635 15.5864C32.3362 12.0649 26.3674 14.3333 24.4498 12.3493C22.5304 10.3653 22.2239 4.75 19 4.75Z"
            stroke="#FFC700"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </label>
  );
};

export default StarCheckbox;
