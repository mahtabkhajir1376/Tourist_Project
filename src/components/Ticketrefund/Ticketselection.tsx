"use client"
import { useState } from 'react';
import Link from 'next/link';

interface TicketProps {
  name: string;
  ticketType: string;
  price: number;
  date: string;
  time: string;
}

const TicketSelection: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const tickets: TicketProps[] = [
    {
      name: 'الهه علی نیا',
      ticketType: 'بزرگسال',
      price: 600000,
      date: '۱۴۰۳/۰۲/۱۶',
      time: '۰۹:۰۰',
    },
    {
      name: 'امیر قنبری',
      ticketType: 'بزرگسال',
      price: 600000,
      date: '۱۴۰۳/۰۲/۱۶',
      time: '۰۹:۰۰',
    },
  ];

  const handleSelect = (name: string) => {
    setSelectedTicket(name);
  };

  return (
    <div className="space-y-4 pt-6 flex justify-center items-center flex-col w-full px-4">
      {tickets.map((ticket) => (
        <div
          key={ticket.name}
          onClick={() => handleSelect(ticket.name)}
          className={`p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer bg-white h-auto md:h-[212px] w-full max-w-[1380px] ${selectedTicket === ticket.name ? 'bg-green-100 border-green-500' : ''
            }`}
        >
          <div className="text-right mb-2 md:mb-0">
            <p>نام تور :</p>
            <p>مدت سفر :</p>
            <p>وسیله‌نقلیه :</p>
            <p>زمان حرکت :</p>
          </div>

          <div className="text-right mb-2 md:mb-0">
            <p>تور گردشگری ۳ روزه کاشان</p>
            <p>3 روز و 2 شب</p>
            <p>اتوبوس VIP</p>
            <p>{ticket.time}</p>
          </div>

          <div className="text-right mb-2 md:mb-0">
            <p>نام مسافر :</p>
            <p>نوع بلیت :</p>
            <p>مبلغ نهایی :</p>
            <p>تاریخ حرکت :</p>
          </div>

          <div className="mb-2 md:mb-0">
            <p>{ticket.name}</p>
            <p>{ticket.ticketType}</p>
            <p>{ticket.price.toLocaleString()} تومان</p>
            <p>{ticket.date}</p>
          </div>

          <div className="mt-4 md:mt-0 md:mr-4">
            <input
              type="checkbox"
              className="checkbox checkbox-success w-6 h-6 text-white border-slate-200 shadow-sm ml-2"
              defaultChecked
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center text-white pt-6 w-full">
        <Link href="/Ticketrefund/Info" className="bg-[#01A657] w-full max-w-[300px] h-[42px] rounded-md flex justify-center items-center">
          مرحله بعدی
        </Link>
      </div>
    </div>
  );
};

export default TicketSelection;
