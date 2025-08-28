import React from "react";
import {
  Search,
  Plus,
  SlidersHorizontal,
  ArrowUpDown,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const orders = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "bg-purple-100 text-purple-600",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "bg-green-100 text-green-600",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-blue-100 text-blue-600",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-yellow-100 text-yellow-700",
    img: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2025",
    status: "Rejected",
    statusColor: "bg-gray-200 text-gray-600",
    img: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "bg-purple-100 text-purple-600",
    img: "https://i.pravatar.cc/40?img=6",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "bg-green-100 text-green-600",
    img: "https://i.pravatar.cc/40?img=7",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-blue-100 text-blue-600",
    img: "https://i.pravatar.cc/40?img=8",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-yellow-100 text-yellow-700",
    img: "https://i.pravatar.cc/40?img=9",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2025",
    status: "Rejected",
    statusColor: "bg-gray-200 text-gray-600",
    img: "https://i.pravatar.cc/40?img=10",
  },
];

const Orders = () => {
  return (
    <div className="mt-20 bg-[#F9FAFB] min-h-screen px-9 py-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#1A1C2B] mb-4">Order List</h2>

      {/* Toolbar */}
      <div className="w-full flex items-center justify-between mb-5 ">
        {/* Left icon group inside a big rounded bar */}
        <div className="flex-1 w-full ">
          <div className="flex items-center justify-between w-full bg-white  shadow-md rounded-2xl h-12 px-2">
            <div className="flex items-center gap-2 space-x-3 ml-5">
              <button className="w-9 h-9 rounded-xl   flex items-center justify-center">
                <Plus className="w-5 h-5 text-[#1A1C2B]" />
              </button>
              <button className="w-9 h-9 rounded-xl   flex items-center justify-center">
                <SlidersHorizontal className="w-5 h-5 text-[#1A1C2B]" />
              </button>
              <button className="w-9 h-9 rounded-xl  flex items-center justify-center">
                <ArrowUpDown className="w-5 h-5 text-[#1A1C2B]" />
              </button>
            </div>
            {/* Right round search button  */}
            <button className="w-9 h-9 rounded-full  flex items-center justify-center mr-5">
              <Search className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
        <table className="w-full text-left">
          <thead className="text-gray-500 text-xs uppercase tracking-wide bg-[#F3F4F6]">
            <tr>
              <th className="px-5 py-3">Order ID</th>
              <th className="px-5 py-3">User</th>
              <th className="px-5 py-3">Project</th>
              <th className="px-5 py-3">Address</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o, i) => {
              const zebra = i % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]";
              const highlight =
                i === 4
                  ? "ring-1 ring-[#E5E7EB] rounded-xl"
                  : ""; // subtle outlined row
              return (
                <tr key={i} className={`${zebra} text-sm text-[#1A1C2B] ${highlight}`}>
                  <td className="px-5 py-4">{o.id}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={o.img}
                        alt={o.user}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{o.user}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">{o.project}</td>
                  <td className="px-5 py-4">{o.address}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{o.date}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${o.statusColor}`}
                    >
                      {o.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination bar like screenshot */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-3 w-full max-w-5xl">
          {["1", "2", "3", "4", "5"].map((n, idx) => (
            <button
              key={n}
              className={`flex-1 h-10 rounded-full border border-[#E5E7EB] bg-white text-sm text-[#1A1C2B] shadow-sm ${
                idx === 4 ? "font-medium" : ""
              }`}
            >
              {n}
            </button>
          ))}
          <button className="h-10 w-16 rounded-full border border-[#E5E7EB] bg-white shadow-sm flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-[#1A1C2B]" />
          </button>
          <button className="h-10 w-16 rounded-full border border-[#E5E7EB] bg-white shadow-sm flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-[#1A1C2B]" />
          </button>
        </div>
          
        <div className="ml-6 flex items-center gap-6 text-sm text-gray-500 ">
          
          <span className="whitespace-nowrap">© 2025 SnowUI</span>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Support
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Orders;
