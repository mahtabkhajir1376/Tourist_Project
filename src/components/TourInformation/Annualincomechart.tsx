"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Annualincomechart = () => {
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
            return null; // Tooltip label is not needed, returning null
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
            const labels = {
              0: '۰',
              10000000: '۱۰ میلیون',
              25000000: '۲۵ میلیون',
              40000000: '۴۰ میلیون',
              55000000: '۵۵ میلیون',
              70000000: '۷۰ میلیون',
              85000000: '۸۵ میلیون',
            };
            return labels[value] || ''; // Return label or empty string
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
    <div className="w-[666px] h-[450px] p-4 bg-white justify-center items-center mr-10 rounded-xl mb-8 font-iransansNumber">
      <div className="text-right font-medium text-black text-sm p-4">
        وضعیت درآمد سالانه
      </div>
      <Line data={data} options={options} />
      <div className="text-center mt-4 bg-white p-2 rounded font-medium text-xs">
        مجموع درآمد تا به امروز: {totalSum.toLocaleString()} میلیون تومان
      </div>
    </div>
  );
};

export default Annualincomechart;