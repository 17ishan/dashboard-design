import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const VisitorInsights = () => {
  // Chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Loyal Customers",
        data: [200, 250, 180, 300, 280, 350, 400, 370, 390, 360, 310, 330],
        borderColor: "#6366F1",
        backgroundColor: "#6366F1",
        tension: 0.4,
      },
      {
        label: "New Customers",
        data: [180, 220, 200, 250, 260, 300, 330, 310, 340, 320, 290, 300],
        borderColor: "#22C55E",
        backgroundColor: "#22C55E",
        tension: 0.4,
      },
      {
        label: "Unique Customers",
        data: [150, 200, 170, 230, 240, 280, 310, 300, 320, 300, 270, 290],
        borderColor: "#F43F5E",
        backgroundColor: "#F43F5E",
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          padding: 15,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 100 },
      },
    },
  };

  return (
    <section className="bg-white rounded-xl h-68  w-127  mt-1 p-4 pl-10 flex flex-col  ">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <h2 className="text- font-bold text-[#1A1C2B]">Visitor Insights</h2>       
      </div>

      {/* Line Chart */}
      <div className="h-[300px]   ">
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default VisitorInsights;
