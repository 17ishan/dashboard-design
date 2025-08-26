import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FaLock, FaWallet } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TargetAndReality = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [
      {
        label: "Reality Sales",
        data: [10, 9, 8, 11, 13, 12, 11],
        backgroundColor: "#34d399", // green
        borderRadius: 3,
        barThickness: 10,
      },
      {
        label: "Target Sales",
        data: [12, 11, 13, 14, 16, 15, 16],
        backgroundColor: "#facc15", // yellow
        borderRadius: 3,
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280", font: { size: 12 } },
      },
      y: {
        grid: { drawBorder: false },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl  p-5 w-[300px] h-[320px] flex flex-col">
      <h2 className="text-lg font-bold text-gray-800 mb-3">Target vs Reality</h2>

      {/* Chart Area */}
      <div className="flex-1">
        <Bar data={data} options={options} />
      </div>

      {/* Legend Section */}
      <div className="mt-4 space-y-4">
        {/* Reality Sales */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-100">
              <FaLock className="text-green-500 text-md" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800 ">Reality Sales</p>
              <p className="text-xs text-gray-500">Global</p>
            </div>
          </div>
          <span className="font-bold text-green-500 text-xs" >8.823</span>
        </div>

        {/* Target Sales */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-yellow-100">
              <FaWallet className="text-yellow-500 text-md" />
            </div>
            <div>
              <p className="font-semibold text-xs text-gray-800">Target Sales</p>
              <p className="text-xs text-gray-500">Commercial</p>
            </div>
          </div>
          <span className="font-bold text-yellow-500 text-xs">12.122</span>
        </div>
      </div>
    </div>
  );
};

export default TargetAndReality;
