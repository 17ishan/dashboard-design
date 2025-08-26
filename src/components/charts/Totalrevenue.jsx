import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TotalRevenue = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Online Sales",
        data: [12000, 15000, 20000, 13000, 17000, 14000, 21000],
        backgroundColor: "rgba(59, 130, 246, 0.7)", // blue
        borderRadius: 3,
        barPercentage: 0.5, // control width of bars
        categoryPercentage: 0.6,
      },
      {
        label: "Offline Sales",
        data: [8000, 11000, 15000, 9000, 12000, 10000, 16000],
        backgroundColor: "rgba(34, 197, 94, 0.7)", // green
        borderRadius: 3,
        barPercentage: 0.5,
        categoryPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // makes chart fit parent div height
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#555", boxWidth: 12, padding: 20 },
      },
      title: { display: false },
    },
    layout: {
      padding: { top: 10, right: 10, left: 10, bottom: 12 }, // neat spacing
    },
    scales: {
      x: {
        ticks: { color: "#555" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#555" },
        grid: { color: "#eee" },
      },
    },
  };

  return (
    <div className="bg-white  rounded-2xl p-5 w-[560px] h-[320px] flex flex-col">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#1A1C2B]">Total Revenue</h2>
        <p className="text-sm text-gray-400">Weekly Report</p>
      </div>

      {/* Chart (fills remaining space) */}
      <div className="flex-1">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalRevenue;
