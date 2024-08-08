"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chartofannualrefundamount = () => {
  const data = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    datasets: [
      {
        label: 'Series 1',
        data: [6000000, 0, 2000000, 15000000, 0, 7000000, 5000000, 0, 5000000, 0, 18000000, 10000000],
        backgroundColor: '#01A65766',
        borderColor: '#01A65766',
      },
      {
        label: 'Series 2',
        data: [0, 20000000, 0, 0, 25000000, 0, 10000000, 15000000, 0, 25000000, 0, 15000000],
        backgroundColor: '#7B4794',
        borderColor: '#7B4794',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'میزان استرداد سالانه',
        align: 'end',
        padding: {
          top: 0,
          bottom: 0,
        },
        font: {
          size: 14,
          weight: 'bold',
          family: 'iransansNumber',
          color: 'black',
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
        borderRadius: '50 ',
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 40,
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
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return value / 1000000 + ' میلیون';
          },
          stepSize: 5000000,
          color: 'black',
          font: {
            family: 'iransansNumber',
          },
        },
        suggestedMax: 30000000,
      },
    },
  };

  const totalSum = data.datasets[0].data.reduce((a, b) => a + b, 0) + data.datasets[1].data.reduce((a, b) => a + b, 0);

  return (
    <div className=" mb-5 bg-white w-[650px] h-[345px] p-4 rounded-xl mr-4">
      <div className="rounded-xl overflow-hidden">
        <Bar data={data} options={options} className='flex justify-center items-center' />
        <p className="text-center flex justify-center items-center bg-white rounded text-xs font-medium w-full h ">
          مجموع استرداد تا به امروز: {totalSum.toLocaleString()} میلیون تومان
        </p>
      </div>
    </div>
  );
};

export default Chartofannualrefundamount;