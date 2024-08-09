"use client";
import React, { useState } from "react";


type Props ={
  numberOfimage:string
}

const UplodeBanner:React.FC<Props> = ({numberOfimage}) => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <label
      htmlFor="file-upload"
      className=" rounded-md h-[150px] w-[30%] bg-white shadow-md cursor-pointer flex items-center justify-center bg-uplode-file bg-no-repeat bg-center mb-5  relative"
    >
      <input
        type="file"
        id="file-upload"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleImageChange}
      />
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          className="object-cover h-full w-full rounded-md z-0 relative"
        />
      ) : null}
      <img
        src="/svg/dashboard/trash_icon.svg"
        onClick={() => setSelectedImage("")}
        className="absolute top-3 left-4 z-10"
      />
      <span className="absolute bottom-3 left-4 text-[10px] font-regular font-iransansNumber">{numberOfimage}</span>
    </label>
  );
};

export default UplodeBanner;
