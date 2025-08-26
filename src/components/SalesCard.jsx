import React from "react";
import { BarChart3, FileText, Tag, Users } from "lucide-react";

// Reusable Stat Card
const StatCard = ({ icon, value, title, change, bgColor, iconBg }) => {
  return (
    <div className={`rounded-2xl p-3 pt-4 h-40 w-56   ${bgColor} `}>
      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${iconBg}  mb-4 `}>
        {icon}
      </div>
      <h2 className=" font-bold text-xl">{value}</h2>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-blue-600 text-xs mt-2">{change}</p>
    </div>
  );
};

// Main Component
const TodaySales = () => {
  return (
    <div className="bg-white p-5 rounded-xl w-[700px]   mt-1 ml-1 ">
      {/* Header */}
      <div className="flex items-center justify-between  mb-6">
        <div>
          <h2 className="text-lg font-semibold text-[#1A1C2B]">Today’s Sales</h2>
          <p className="text-gray-400 text-sm">Sales Summery</p>
        </div>
        <button className="border-slate-300 border px-2 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2 w-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Export
        </button>
      </div>

      {/* Stats Row */}
      <div className="flex gap-4 ">
        <StatCard
          icon={<BarChart3 className="text-pink-600 " />}
          value="$1k"
          title="Total Sales"
          change="+8% from yesterday"
          bgColor="bg-pink-100"
          iconBg="bg-pink-200"
        />
        <StatCard
          icon={<FileText className="text-orange-600" />}
          value="300"
          title="Total Order"
          change="+5% from yesterday"
          bgColor="bg-orange-100"
          iconBg="bg-orange-200"
        />
        <StatCard
          icon={<Tag className="text-green-600" />}
          value="5"
          title="Product Sold"
          change="+1.2% from yesterday"
          bgColor="bg-green-100"
          iconBg="bg-green-200"
        />
        <StatCard
          icon={<Users className="text-purple-600" />}
          value="8"
          title="New Customers"
          change="0.5% from yesterday"
          bgColor="bg-purple-100"
          iconBg="bg-purple-200"
        />
      </div>
    </div>
  );
};

export default TodaySales;
