import React from "react";

const products = [
  {
    id: "01",
    name: "Home Decor Range",
    popularity: "45%",
    color: "bg-blue-500",
    salesColor: "text-blue-600 border-blue-200 bg-blue-50",
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: "29%",
    color: "bg-green-500",
    salesColor: "text-green-600 border-green-200 bg-green-50",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    popularity: "18%",
    color: "bg-purple-500",
    salesColor: "text-purple-600 border-purple-200 bg-purple-50",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    popularity: "25%",
    color: "bg-orange-500",
    salesColor: "text-orange-600 border-orange-200 bg-orange-50",
  },
];

const TopProducts = () => {
  return (
    <div className="bg-white rounded-2xl  p-6 h-[325px] w-[500px]">
      {/* Header */}
      <h2 className="text-lg font-bold text-gray-800 mb-6">Top Products</h2>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4 text-xs"
          >
            {/* ID */}
            <span className="w-8 font-semibold text-gray-500">{item.id}</span>

            {/* Name */}
            <span className="flex-1 text-gray-800 font-sm">
              {item.name}
            </span>

            {/* Popularity Bar */}
            <div className="w-40 h-1 rounded-full bg-gray-100 mx-4 overflow-hidden">
              <div
                className={`h-2 ${item.color}`}
                style={{ width: item.popularity }}
              ></div>
            </div>

            {/* Sales Badge */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${item.salesColor}`}
            >
              {item.popularity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
