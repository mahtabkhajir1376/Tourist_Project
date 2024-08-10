import React from 'react';

const TourdetailsForm = () => {
    return (
        <form className="w-[1011px] h-[540px] p-4 space-y-4 bg-white text-sm font-iransansNumber">
            {[
                { label: 'آدرس', type: 'text', id: 'address', maxLength: 100 },
                { label: 'شماره تماس', type: 'tel', id: 'phone' },
                { label: 'آدرس ایمیل', type: 'email', id: 'email' },
                { label: 'لینک اینستاگرام', type: 'url', id: 'instagram' },
                { label: 'لینک توییتر', type: 'url', id: 'twitter' },
                { label: 'لینک یوتیوب', type: 'url', id: 'youtube' },
                { label: 'لینک لینکدین', type: 'url', id: 'linkedin' },
            ].map(({ label, type, id, maxLength }) => (
                <div key={id} className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-4">
                        <img src="/image/LoginForm/Edit.png" alt="" className="ml-2" />
                        <label htmlFor={id} className="w-[150px] text-right">{label}:</label>
                        <input
                            type={type}
                            id={id}
                            className="input input-bordered input-success w-full h-[42px] rounded-md"
                            maxLength={100}
                        />
                    </div>

                    {id === 'address' && (
                        <p className="text-[#707070] text-[10px]  text-right font-light  mr-44 ">
                            تعداد کاراکترها بیش از 100 کاراکتر نشود
                        </p>
                    )}
                </div>
            ))}


            <div className="flex items-center space-x-4 mt-4">
                <img src="/image/LoginForm/Edit.png" alt="" className="ml-2" />
                <label className="w-[150px] text-right">تعویض لوگو:</label>
                <div className="relative w-[200px] h-[80px] bg-white shadow-lg shadow-[#E3EBE9] border border-[#01A657] border-dashed rounded-md flex justify-center items-center">
                    <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full">
                        <input type="file" className="hidden" />
                        <img src="/image/DetailsTour/TourdetailsCard/Upload.svg" alt="Upload" className="w-5 h-5" />
                    </label>

                    <img
                        src="/image/DetailsTour/TourdetailsCard/Delete.svg"
                        alt="Delete"
                        className="absolute bottom-[-12px] left-[-12px] w-5 h-5 cursor-pointer"
                    />
                </div>
            </div>

            <button type="submit" className="absolute bottom-4 left-10 bg-[#01A657] w-[200px] h-[42px] text-white px-4 py-2 rounded">
                ثبت
            </button>
        </form>
    );
};

export default TourdetailsForm;