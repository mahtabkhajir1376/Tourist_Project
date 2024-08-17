import React from 'react';
import { ReactNode } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: ReactNode;
  }


const Modal:React.FC<ModalProps> = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-start   justify-center z-50 overflow-y-auto" onClick={onClose}>
            <div className="bg-white p-9 rounded-lg shadow-lg max-w-lg w-full relative  mx-4 my-8">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"><IoIosCloseCircleOutline className=' text-[#01A657] w-6 h-6'/></button>
                {children}
            </div>
        </div>
    );
};

export default Modal;


