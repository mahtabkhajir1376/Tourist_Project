"use client";
import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface Data {
  new_password: string;
  repeat_newpassword: string;
}

const ChangePassword = () => {
  const [passwordeye, setpasswordeye] = useState<boolean>(false);
  const [repeatpasswordeye, setrepeatpasswordeye] = useState<boolean>(false);

  const handlepasswordeyeclick = () => {
    setpasswordeye(!passwordeye);
  };
  const handlerepeatpasswordeyeclick = () => {
    setrepeatpasswordeye(!repeatpasswordeye);
  };

  const onSubmitform = (data) => {
    return console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    criteriaMode: "all",
  });

  const password =watch('new_password')

  return (
    <div className="flex items-center justify-center min-h-screen relative font-iransansNumber">
      <img
        src="/image/LoginForm/Wave.png"
        alt="wave"
        className="absolute left-0 bottom-0 w-full h-[463px] object-cover "
      />

      <img
        src="/image/LoginForm/Logo.png"
        alt="logo"
        className="absolute top-5 right-5 2xl:w-32 sm:w-20 h-auto"
      />

      <div className=" bg-white rounded-xl shadow-lg shadow-[#E3EbE9] 2xl:w-[36%] sm:w-[50%]  2xl:h-[600px]  z-10 my-40 flex flex-col items-center  justify-between">
        <img
          src="/image/LoginForm/BackgroundLogin1.png"
          alt="BackgroundLogin"
          className="2xl:w-full sm:w-full h-[47.5%] rounded-md mb-6"
        />
        <form
          onSubmit={handleSubmit(onSubmitform)}
          className="flex flex-col items-center justify-center w-full py-2 bg-white rounded-b-lg"
        >
          <h1 className="  font-iransansNumber font-medium 2xl:text-xl sm:text-sm md:text-base">
            ورود با رمز عبور
          </h1>
          <h4 className="font-iransansNumber font-ultraLight 2xl:text-[10px] sm:text-[8px] md:text-[10px] mt-[12px]">
            حالا میتونی رمز عبور جدید بذاری
          </h4>
          <label
            className={`input input-ghost flex items-center gap-2  ${
              errors.new_password ? "bg-red-200 border-red-600" : ""
            } bg-[#E8EDEC4D] mt-[32px]  w-full max-w-xs sm:w-1/2 h-[42px] md:w-[70%] rounded-md `}
          >
            <input
              type={passwordeye ? "text" : "password"}
              className="grow max-w-xs rounded-md   sm:text-[8px] md:text-[10px]  2xl:text-xs bg-[#E8EDEC4D] "
              placeholder="رمز عبور جدید"
              {...register("new_password", {
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                    message:" رمز عبور باید شامل حداقل یک حرف بزرگ،یک حرف کوچک،یک عدد باشد"
                },
                required: "شما باید یک رمز جدید وارد کنید",
                minLength:{
                  value:8,
                  message:" رمز عبور  حداقل 8 کاراکتر باشد"
                },
                maxLength:{
                  value:16,
                  message:" رمز عبور  حداکثر 16 کارکتر باشد"
                }
              })}
            />
            {passwordeye ? (
              <img
                src="/svg/visibleeye.svg"
                alt=""
                onClick={handlepasswordeyeclick}
                className="cursor-pointer"
              />
            ) : (
              <img
                src="/svg/Hideeyeicon.svg"
                alt=""
                onClick={handlepasswordeyeclick}
                className="cursor-pointer"
              />
            )}
          </label>
          <ErrorMessage
            errors={errors}
            name="new_password"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p
                  key={type}
                  className="text-xs text-[#D23D3D]  w-full max-w-xs mt-2"
                >
                  {message}
                </p>
              ))
            }
          />
          <label
            className={`input input-ghost ${
              errors.new_password ? "bg-red-200 border-red-600" : ""
            } flex items-center gap-2 bg-[#E8EDEC4D] mt-[32px]  w-full max-w-xs sm:w-1/2 h-[42px] md:w-[70%] rounded-md`}
          >
            <input
              type={repeatpasswordeye ? "text" : "password"}
              className="grow max-w-xs rounded-md   sm:text-[8px] md:text-[10px]  2xl:text-xs bg-[#E8EDEC4D] "
              placeholder="تکرار رمز عبور جدید"
              {...register("repeat_newpassword", {
                required:"لطفا رمز عبور جدید را مجددا وارد نمایید",
                validate:(value)=>
                  value === password || "تکرار رمز عبور مطابقت ندارد",
                minLength:{
                  value:8,
                  message:" رمز عبور باید حداقل 8 کاراکتر باشد"
                },
                maxLength:{
                  value:16,
                  message:" رمز عبور باید حداکثر 16 کارکتر باشد"
                }
                
              })}
            />
            {repeatpasswordeye ? (
              <img
                src="/svg/visibleeye.svg"
                alt=""
                onClick={handlerepeatpasswordeyeclick}
                className="cursor-pointer"
              />
            ) : (
              <img
                src="/svg/Hideeyeicon.svg"
                alt=""
                onClick={handlerepeatpasswordeyeclick}
                className="cursor-pointer"
              />
            )}
          </label>
          <ErrorMessage
            errors={errors}
            name="repeat_newpassword"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p
                  className="text-xs text-[#D23D3D] w-full max-w-xs mt-2"
                  key={type}
                >
                  {message}
                </p>
              ))
            }
          />
          <button
            type="submit"
            className="btn btn-success text-white 2xl:text-sm md:text-[10px] lg:text-xs xl:text-sm  w-full  sm:text-[8px] 2xl:w-[50%] sm:w-[30%]  mt-[32px] my-5  rounded-md "
          >
            تغییر رمز عبور
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
