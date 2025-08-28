import { Bell, ChevronDown, Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed h-20 w-7xl  flex items-center justify-between px-6 bg-white z-10">
      {/* Dashboard Title */}
      <h1 className="font-bold text-2xl text-[#1A1C2B]">Dashboard</h1>

      {/* Search */}
      <div className="flex items-center w-100 bg-[#F9FAFB] rounded-lg px-3 py-2 ml-20">
        <Search color="#5d5fef" className="mr-2" />
        <input
          type="text"
          className="bg-transparent outline-none w-full text-sm text-gray-500"
          placeholder="Search here..."
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        {/* Flag + Dropdown */}
        <div className="flex items-center gap-2">
          <img src="./usa.png" alt="flag" className="w-6 h-6" />
          <p className="text-sm font-medium">Eng (US)</p>
          <ChevronDown color="#9e9a9a" size={16} />
        </div>

        {/* Bell Icon */}
        <div className="w-12 h-12  rounded-2xl bg-[#FFFAF1] flex justify-center items-center">
          <Bell color="#ffa412" />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-6">
          <img
            src="./profileImage.png"
            alt="profile"
            className="w-12 h-12 rounded-b-xl object-cover"
          />
          <div className="flex flex-col leading-tight">
            <p className="font-medium">Musfiq</p>
            <p className="text-sm text-gray-400">Admin</p>
          </div>
          <ChevronDown color="#000" size={16} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
