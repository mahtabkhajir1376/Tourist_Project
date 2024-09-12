"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import Timer from "./Timer";
import clsx from "clsx";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToken } from "@/container/tokenSlice";
import { useRouter } from "next/navigation";
import { setuserInfo } from "@/container/tokenSlice";
import { BASE_URL_API } from "@/utils/services";

const schema = z.object({
  inputs: z
    .array(
      z
        .string()
        .length(1, "فقط یک عدد مجاز است")
        .regex(/^\d$/, "فقط اعداد مجاز هستند")
    )
    .length(4, "تمام ورودی‌ها باید پر شوند"),
});

type FormValues = {
  inputs: string[];
};

const ReceiveCode: React.FC = () => {
  const inputCount = 4;
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [code, setcode] = useState("");
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    console.log(code);
  }, [code]);

  const dispatch = useDispatch();

  const router = useRouter();

  const tokenFetch = useMutation({
    mutationFn: () => {
      return axios
        .post(
          `${BASE_URL_API}/verify_register_code`,
          { code, verification_token: token },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
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
  const verifyResetPassword = useMutation({
    mutationFn: () => {
      return axios
        .post(
          `${BASE_URL_API}/verify_reset_password_code`,
          { code, verification_token: token },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
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
      router.push("/login/change-password");
    },
  });

  const handleLogin = () => {
    tokenFetch.mutate();
  };
  console.log({ code, token });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      inputs: Array(inputCount).fill(""),
    },
  });

  const onSubmit = (data: FormValues) => {
    if (data.inputs.every((input) => input.trim() !== "")) {
      setSuccessMessage("عملیات با موفقیت ثبت شد!");
      setErrorMessage(null);
      reset();
    } else {
      setSuccessMessage(null);
      setErrorMessage("لطفا تمام فیلدها را پر کنید");
    }
  };

  const handlePasswordButtonClick = () => {
    setShowTimer(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <img
        src="/image/LoginForm/Wave.png"
        alt="wave"
        className="absolute left-0 bottom-0 w-full h-[463px] object-cover"
      />
      <img
        src="/image/LoginForm/Logo.png"
        alt="logo"
        className="absolute top-8 right-5 w-[10wv] max-w-[120px] h-auto sm:max-w-[120px] lg:max-w-[150px] xl:max-w-[180px]"
      />

      <div className="bg-white shadow-[#E3EBE9] rounded-xl shadow-md max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto z-10 mt-[57px] mb-[100px]">
        <div className="mb-6">
          <img
            src="/image/LoginForm/BackgroundLogin.png"
            alt="BackgroundLogin"
            className="w-full h-[300px] rounded-md object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center mx-4 sm:mx-10 md:mx-20 lg:mx-24 mt-[15px]">
          <h1 className="font-iransansNumber font-medium text-xl leading-[30px] mt-[15px]">
            کد را وارد کنید
          </h1>
          <div className="flex flex-row justify-center items-center mt-[18px]">
            <h4 className="font-iransansNumber font-ultraLight text-[10px] leading-5 text-right">
              {" "}
              شماره موبایل را اشتباه وارد کرده اید؟ اصلاح کنید
            </h4>
            <Link href={"/signIn"}>
              <img
                src="/image/LoginForm/Edit.png"
                alt="Edit"
                className="w-[18px] h-[18px] mr-14"
              />
            </Link>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-end mt-[15px] font-iransansNumber"
          >
            {errorMessage && (
              <div className="p-2 w-56 bg-white shadow-md shadow-slate-200 text-xs font-light text-red-600 rounded-md text-right ml-12">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="p-2 w-56 bg-white shadow-md shadow-slate-200 text-xs font-light text-green-600 rounded-md text-right ml-12">
                {successMessage}
              </div>
            )}
            <Controller
              name="inputs"
              control={control}
              render={({ field }) => (
                <div className="flex flex-row gap-4 sm:gap-6">
                  {field.value.map((value, index) => (
                    <div key={index} className="relative">
                      <input
                        type="text"
                        value={value}
                        maxLength={1}
                        onChange={(e) => {
                          const newValues = [...field.value];
                          newValues[index] = e.target.value;
                          field.onChange(newValues);
                          const reversedValues = [...newValues].reverse();
                          const result = reversedValues.join("");
                          setcode(result);
                          console.log(code);
                        }}
                        className={clsx(
                          "w-[40px] sm:w-[50px] h-[50px] rounded-md bg-[#E8EDEC4D] font-iransansNumber text-xs leading-[18px] mt-[15px] text-center border",
                          {
                            "border-red-500": errors.inputs?.[index],
                            "border-gray-300": !errors.inputs?.[index],
                          }
                        )}
                      />
                    </div>
                  ))}
                </div>
              )}
            />

            <div className="flex flex-col mb-[64px] mt-[15px]">
              <button
                type="submit"
                className="btn btn-success text-white text-sm leading-5 font-iransansNumber w-full sm:w-[271px]  h-[42px] rounded-md mt-[15px]"
                onClick={handleLogin}
              >
                ورود
              </button>
              <div className="flex items-center justify-center space-x-2 gap-4 mt-[15px]">
                <button
                  type="button"
                  onClick={handlePasswordButtonClick}
                  className=" text-success text-sm font-iransansNumber leading-5 w-auto h-[44px]"
                >
                  ارسال دوباره ی کد
                </button>
                {showTimer && (
                  <div>
                    <Timer />
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReceiveCode;
