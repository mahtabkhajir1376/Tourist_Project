"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { setToken } from "@/container/tokenSlice";
import { useDispatch } from "react-redux";
import { setuserInfo } from "@/container/tokenSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { BASE_URL_API } from "@/utils/services";

export interface Data {
  phone_number: string;
  password?: string;
}

const PasswordForm: React.FC = () => {
  const [passwordeye, setpasswordeye] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<Data>({
    phone_number: "",
    password: "",
  });
  const token = useSelector((state) => state.auth.token);

  const router = useRouter();

  const dispatch = useDispatch();

  const tokenFetch = useMutation({
    mutationFn: (credentials) => {
      return axios
        .post(`${BASE_URL_API}/login`, credentials, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Response:", response.data);
          return response.data;
        })
        .catch((error) => {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
          throw error;
        });
    },
    onSuccess: (data) => {
      dispatch(setToken(data.token));
      dispatch(
        setuserInfo({
          firstName: data.first_name,
          lastName: data.last_name,
          role: data.role,
        })
      );
      router.push("/");
    },
  });

  const forgotPassword = useMutation({
    mutationFn: (credentials) => {
      return axios
        .post(`${BASE_URL_API}/request_reset_password`, credentials, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Response:", response.data);
          return response.data;
        })
        .catch((error) => {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
          throw error;
        });
    },
    onSuccess: (data) => {
      dispatch(setToken(data.verification_token));
      router.push("/receive_code");
    },
  });

  const handleForgotPassword = () => {
    forgotPassword.mutate(credentials);
  };

  const handleLogin = () => {
    tokenFetch.mutate(credentials);
  };

  const handlepasswordeyeclick = () => {
    setpasswordeye(!passwordeye);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmitform: SubmitHandler<Data> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative font-iransansNumber">
      <img
        src="/image/LoginForm/Wave.png"
        alt="wave"
        className="absolute left-0 bottom-0 w-full h-[463px] object-cover"
      />

      <img
        src="/image/LoginForm/Logo.png"
        alt="logo"
        className="absolute top-5 right-5 2xl:w-32 sm:w-20 h-auto"
      />

      <div className=" bg-white rounded-xl shadow-lg shadow-[#E3EbE9] 2xl:w-[36%] sm:w-[50%]  2xl:h-[600px]  z-10 my-40 flex flex-col items-center justify-center">
        <img
          src="/image/LoginForm/BackgroundLogin1.png"
          alt="BackgroundLogin"
          className="2xl:w-full sm:w-full h-full rounded-md mb-6"
        />
        <form
          className="flex flex-col items-center justify-center w-full py-2 bg-white rounded-b-lg"
          onSubmit={handleSubmit(onSubmitform)}
          method="POST"
        >
          <h1 className="  font-iransansNumber font-medium 2xl:text-xl sm:text-sm md:text-base">
            ورود با رمز عبور
          </h1>
          <h4 className="font-iransansNumber font-ultraLight 2xl:text-[10px] sm:text-[8px] md:text-[10px] mt-[12px]">
            سلام! برای ورود به سفر‌جو شماره موبایل یا ایمیل خود را وارد کنید.
          </h4>

          <input
            type="number"
            placeholder="شماره موبایل"
            className={`input  max-w-xs w-full sm:w-1/2 md:w-[70%] h-[42px] rounded-md ${
              errors.phone_number ? "bg-red-200 border-red-600" : ""
            }  bg-[#E8EDEC4D] 2xl:text-xs sm:text-[8px] md:text-[10px]  mt-3`}
            {...register("phone_number", {
              pattern: {
                value: /(\+98|0)?9\d{9}/,
                message: "شماره تماس نامعتبر است",
              },
              required: "این فیلد اجباری می باشد",
            })}
            value={credentials.phone_number}
            onChange={(e) =>
              setCredentials({ ...credentials, phone_number: e.target.value })
            }
          />
          <ErrorMessage
            errors={errors}
            name="phone_number"
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
            className={`input input-ghost  ${
              errors.password ? "bg-red-200 border-red-600" : ""
            }  flex items-center gap-2 bg-[#E8EDEC4D] mt-[32px]  w-full max-w-xs sm:w-1/2 h-[42px] md:w-[70%] rounded-md`}
          >
            <input
              type={passwordeye ? "text" : "password"}
              className={`grow max-w-xs rounded-md   sm:text-[8px] md:text-[10px]  2xl:text-xs bg-[#E8EDEC4D] `}
              placeholder="رمز عبور"
              {...register("password", {
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                  message:
                    " رمز عبور باید شامل حداقل یک حرف بزرگ،یک حرف کوچک،یک عدد باشد",
                },
                required: "این فیلد اجباری می باشد",
              })}
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            {passwordeye ? (
              <img
                src="/svg/loginIcons/visibleeye.svg"
                alt=""
                onClick={handlepasswordeyeclick}
                className="cursor-pointer"
              />
            ) : (
              <img
                src="/svg/loginIcons/Hideeyeicon.svg"
                alt=""
                onClick={handlepasswordeyeclick}
                className="cursor-pointer"
              />
            )}
          </label>
          <ErrorMessage
            errors={errors}
            name="password"
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
            className="btn btn-success text-white 2xl:text-sm md:text-[10px] lg:text-xs xl:text-sm 2xl:w-[50%] sm:w-[70%]  mt-[32px]  w-full  sm:text-[8px]  rounded-md "
            onClick={handleLogin}
          >
            ورود با رمز عبور
          </button>

          <div
            className="flex flex-row justify-between items-center font-medium 2xl:text-xs sm:text-[8px]  text-[#01A657] w-[50%] mt-5 
          "
          >
            <Link href="" onClick={handleForgotPassword}>
              فراموشی رمز
            </Link>
            <Link href="/Loginform/">ورود با رمز یکبار مصرف</Link>
          </div>
          <p className="2xl:text-[10px] sm:text-[8px] text-[#000000] font-ultraLight mt-4  md:text-[10px] py-2 ">
            ورود به سایت به معنای پذیرش قوانین است
          </p>
        </form>
      </div>
    </div>
  );
};

export default PasswordForm;
