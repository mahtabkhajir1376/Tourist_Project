"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Salespercentageoftours = () => {
  const data = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    datasets: [
      {
        label: 'Revenue',
        data: [85000000, 70000000, 55000000, 40000000, 25000000, 10000000, 25000000, 10000000, 15000000, 10000000, 20000000, 42000000],
        borderColor: '#7B4794',
        backgroundColor: 'rgba(123, 71, 148, 0.2)',
        tension: 0.4,
        fill: true,
        pointRadius: (context) => context.dataIndex === context.dataset.data.length - 1 ? 6 : 0,
        pointHoverRadius: 10,
        pointBorderColor: '#7B4794',
        pointBackgroundColor: '#7B4794',
        width:"50%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: 'black',
          font: {
            family: 'iransansNumber',
            size: 10,
          },
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          drawBorder: false,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        border: {
          display: false,
        },
        ticks: {
          callback: function (value) {

            if (value === 0) return '۰';
            if (value === 10000000) return '۱۰ میلیون';
            if (value === 25000000) return '۲۵ میلیون';
            if (value === 40000000) return '۴۰ میلیون';
            if (value === 55000000) return '۵۵ میلیون';
            if (value === 70000000) return '۷۰ میلیون';
            if (value === 85000000) return '۸۵ میلیون';
            return '';
          },
          color: 'black',
          font: {
            family: 'iransansNumber',
            size: 10,
          },
        },
      },
    },
  };

  const totalSum = data.datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <div className="w-[62.5%] h-full  bg-white px-6 pb-4   rounded-xl font-iransansNumber  ">
      <div className="text-right font-medium text-black font-iransansNumber text-sm py-4 flex flex-row pr-3  ">
        وضعیت درآمد سالانه
      </div>
      <div className='flex flex-col justify-between h-[410px] items-center '>
      <Line data={data} options={options}  />
      <div className="text-center mt-4 bg-white p-2 rounded  font-medium text-xs  ">
        مجموع درآمد تا به امروز: {totalSum.toLocaleString()} میلیون تومان
      </div>
      </div>
    </div>
  );
};

export default Salespercentageoftours; 