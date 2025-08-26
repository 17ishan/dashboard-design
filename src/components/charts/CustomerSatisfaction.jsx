import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CustomerSatisfaction = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Last Month",
        data: [2000, 2500, 1800, 1900, 2100, 2200, 3004],
        borderColor: "rgba(37, 99, 235, 1)", // blue
        backgroundColor: "rgba(37, 99, 235, 0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "rgba(37, 99, 235, 1)",
      },
      {
        label: "This Month",
        data: [3000, 3200, 3100, 3300, 3400, 3600, 4504],
        borderColor: "rgba(34,197,94,1)", // green
        backgroundColor: "rgba(34,197,94,0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "rgba(34,197,94,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // ensures proper fit
    plugins: {
      legend: {
        display: false, // hide default legend
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#555" },
      },
      y: {
        grid: { color: "#eee" },
        ticks: { color: "#555" },
      },
    },
  };

  return (
    <div className="bg-white  rounded-2xl p-3 w-[350px] h-[320px] flex flex-col">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4">Customer Satisfaction</h2>

      {/* Chart */}
      <div className="flex-1">
        <Line data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div className="flex justify-between items-center mb-1 px-3">
        <div className="flex items-center gap-1">
          <span className="w-2  h-2 rounded-full bg-blue-500 inline-block"></span>
          <span className="text-gray-600 text-xs">Last Month</span>
          <span className="ml-1 font-semibold text-gray-800 text-xs">$3,004</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
          <span className="text-gray-600 text-xs">This Month</span>
          <span className="ml-1 font-semibold text-gray-800 text-xs">$4,504</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
