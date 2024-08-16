
"use client"; 
import React from 'react'; 
import { useForm } from 'react-hook-form'; 
import { z } from 'zod'; 
import { zodResolver } from '@hookform/resolvers/zod'; 
import { useRouter } from 'next/navigation'; 
import clsx from 'clsx'; 
import Link from 'next/link'; 

const schema = z.object({ 
  phoneNumber: z.string() 
    .length(11, { message: 'شماره وارد شده باید شامل 11 رقم باشد' }) 
    .startsWith('09', { message: 'شماره موبایل باید با ۰۹ شروع شود' }), 
}); 

type FormValues = z.infer<typeof schema>; 

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => ( 
  <p className="p-2 w-full sm:w-[300px] bg-white shadow-md shadow-slate-200 text-xs font-light text-red-600 rounded-md text-right ml-0 sm:ml-12"> 
    {message} 
  </p> 
); 

const Login: React.FC = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ 
    resolver: zodResolver(schema), 
  }); 

  const router = useRouter(); 

  const onSubmit = (data: FormValues) => { 
    router.push('/Loginform/ReceiveCode'); 
  }; 

  return ( 
    <div className="flex items-center justify-center min-h-screen relative px-4 sm:px-8"> 
      <img 
        src="/image/LoginForm/Wave.png" 
        alt="wave" 
        className="absolute left-0 bottom-0 w-full h-[200px] sm:h-[463px] object-cover" 
      /> 
      <img 
        src="/image/LoginForm/Logo.png" 
        alt="logo" 
        className="absolute top-5 right-5 w-24 sm:w-32 h-auto" 
      /> 
      <div className="bg-white rounded-xl shadow-lg w-full sm:w-[550px] h-auto sm:h-[750px] z-10 mt-[20px] sm:mt-[57px] mb-[50px] sm:mb-[100px] flex flex-col"> 
        <div className="mb-4 sm:mb-6"> 
          <img 
            src="/image/LoginForm/BackgroundLogin.png" 
            alt="BackgroundLogin" 
            className="w-full h-[200px] sm:h-[300px] rounded-md object-cover" 
          /> 
        </div> 
        <div className="flex flex-col items-center flex-grow px-4 sm:px-8"> 
          <h1 className="text-lg sm:text-xl font-iransansNumber font-medium mt-4 sm:mt-[60px]"> 
            ورود و ثبت نام 
          </h1> 
          <h4 className="font-iransansNumber font-ultraLight text-xs leading-5 mt-4 sm:mt-[18px] mb-4 sm:mb-[10px] text-center"> 
            سلام! برای ورود به سفر‌جو شماره موبایل یا ایمیل خود را وارد کنید. 
          </h4> 
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full py-2 bg-white rounded-b-lg font-iransansNumber"> 
            {errors.phoneNumber && ( 
              <ErrorMessage message={errors.phoneNumber.message} /> 
            )} 
            <input 
              type="text" 
              maxLength={11} 
              placeholder="شماره موبایل" 
              className={clsx('w-full sm:w-[380px] h-[42px] rounded-md bg-[#E8EDEC4D] font-iransansNumber text-xs leading-[18px] mt-4 sm:mt-[18px] p-4', { 'bg-red-200 border-red-600': errors.phoneNumber })} 
              {...register('phoneNumber')} 
            /> 
            <button 
              type="submit" 
              className="btn btn-success text-white text-sm leading-5 w-full sm:w-[271px] h-[42px] rounded-md mt-4 sm:mt-[18px] font-iransans" 
            > 
              دریافت کد 
            </button> 
            <Link 
              href="/login" 
              className="btn bg-white btn-success text-success outline-1 outline-success hover:text-white text-sm leading-5 w-full sm:w-[271px] h-[42px] rounded-md mt-3 sm:mt-[11px] font-iransans"
            > 
              ورود با رمز عبور 
            </Link> 
            <div className="mt-8 sm:mt-[50px]"> 
              <p className="text-[10px] sm:text-xs text-[#000000] font-ultraLight font-iransansNumber text-center"> 
                ورود به سایت به معنای پذیرش قوانین است 
              </p> 
            </div> 
          </form> 
        </div> 
      </div> 
    </div> 
  ); 
}; 


export default Login;

