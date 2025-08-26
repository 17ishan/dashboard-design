import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "A", volume: 400, services: 200 },
  { name: "B", volume: 350, services: 180 },
  { name: "C", volume: 380, services: 220 },
  { name: "D", volume: 280, services: 150 },
  { name: "E", volume: 300, services: 170 },
];

// Dynamic totals
const totalVolume = data.reduce((sum, d) => sum + d.volume, 0);
const totalServices = data.reduce((sum, d) => sum + d.services, 0);

const VolumeAndService = () => {
  return (
    <div className="bg-white  rounded-xl p-5 w-[305px] ml-22 h-[325px] flex flex-col justify-between ">
      {/* Title */}
      <h2 className="text-lg font-semibold">Volume vs Service Level</h2>

      {/* Chart */}
      <div className="flex-1 flex items-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={18}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip cursor={{ fill: "transparent" }} />
            {/* Services at bottom, Volume stacked above */}
            <Bar
              dataKey="services"
              stackId="a"
              fill="#34d399"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center gap-8 mt-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-gray-600">Volume:</span>
          <span className="font-semibold">{totalVolume}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
          <span className="text-gray-600">Services:</span>
          <span className="font-semibold">{totalServices}</span>
        </div>
      </div>
    </div>
  );
};

export default VolumeAndService;
