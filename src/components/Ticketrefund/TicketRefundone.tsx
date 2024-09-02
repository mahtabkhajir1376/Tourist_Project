"use client";
import React from "react";
import Link from "next/link";

const TicketRefundone: React.FC = () => {
    return (
        <div className="flex flex-col items-start justify-start pt-14 px-4 md:px-8 lg:px-16">
            <div className="w-full">
                <form>
                    {[
                        "به علت نارضایتی از امکانات و شرایط تور پشیمان شدم",
                        "به علت پیدا کردن تور های مناسب تر در سایت های دیگر",
                        "دلایل شخصی (کار، نشان، شرایط و ...)."
                    ].map((reason, index) => (
                        <div
                            className="mb-6 bg-white rounded-md w-full md:w-[750px] lg:w-[1011px] h-[50px] flex justify-between p-4"
                            key={index}
                        >
                            <label className="flex justify-between items-center w-full">
                                <span className="text-sm font-regular">{reason}</span>
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-success w-6 h-6 text-white shadow-md border-slate-200 mr-[10%] md:mr-[15%] lg:mr-[21%]"
                                    defaultChecked
                                />
                            </label>
                        </div>
                    ))}


                    <div className="mb-6 w-full md:w-[750px] lg:w-[1011px]">
                        <label className="relative flex items-center w-full">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-success w-6 h-6 text-white border-slate-200 shadow-md absolute left-3"
                                defaultChecked
                            />
                            <input
                                type="text"
                                className="form-input flex-1 text-xs rounded-md p-4 h-[50px] pl-10"
                                placeholder="لطفا اگر دلیلی به جز دلایل ذکر شده دارید لطفا در این باکس بنویسید ."
                            />
                        </label>
                        <div className="text-[#01A657] text-xs font-ultraLight flex justify-between pt-4">
                            <p>تکرار کاراکتر های شما بیش از 100. کاراکتر نشود ، با سپاس .</p>
                            <p>100/0</p>
                        </div>
                    </div>


                </form>
                <div className="flex flex-col justify-center items-center pt-14">
                    <Link
                        href="/Ticketrefund/Ticketselection"
                        type="submit"
                        className="bg-[#01A657] text-sm h-[48px] w-full max-w-[300px] text-white py-2 px-4 rounded-md flex justify-center items-center"
                    >
                        مرحله بعدی
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TicketRefundone;
