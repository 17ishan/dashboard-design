import React from "react";

const WorldMap = () => {
  return (
    <div className="bg-white rounded-xl  p-6 w-full max-w-[400px] h-[325px] flex flex-col ml-22">
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Sales Mapping by Country
      </h2>

      {/* Map */}
      <div className="relative flex-1 flex justify-center items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png"
          alt="World Map"
          className="w-full h-full object-contain opacity-85"
        />

        {/* Highlight Points */}
        <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-orange-400 rounded-full shadow-md"></div> {/* USA */}
        <div className="absolute top-[65%] left-[28%] w-4 h-4 bg-red-400 rounded-full shadow-md"></div> {/* Brazil */}
        <div className="absolute top-[55%] left-[45%] w-4 h-4 bg-blue-500 rounded-full shadow-md"></div> {/* Africa */}
        <div className="absolute top-[38%] left-[50%] w-4 h-4 bg-green-500 rounded-full shadow-md"></div> {/* Middle East */}
        <div className="absolute top-[35%] left-[70%] w-4 h-4 bg-purple-500 rounded-full shadow-md"></div> {/* China */}
        <div className="absolute top-[55%] left-[75%] w-4 h-4 bg-emerald-500 rounded-full shadow-md"></div> {/* Indonesia */}
      </div>
    </div>
  );
};

export default WorldMap;
