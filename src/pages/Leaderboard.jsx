import React from "react";
import { Mic } from "lucide-react";

const Leaderboard = () => {
  const data = [
    { username: "@sr1809", rank: 4, score: 400 },
    { username: "@ayush123", rank: 5, score: 367 },
    { username: "@ruchi4567", rank: 6, score: 340 },
    { username: "@frenny56789", rank: 7, score: 320 },
    { username: "@vijay678", rank: 8, score: 318 },
    { username: "@brinda670988", rank: 9, score: 310 },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-10 mt-20 relative px-25">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#1A1C2B] mb-2">
        See where you are!
      </h1>
      <p className="text-sm text-[#9CA3AF] mb-6">Here is your Leaderboard</p>

      {/* Dropdown */}
      <div className="mb-6">
        <label className="text-[#1A1C2B] font-medium mr-2">Showing :</label>
        <select className="border border-[#E5E7EB] rounded-xl px-3 py-1 text-[#1A1C2B] w-62 h-8 text-center bg-white">
          <option>Overall</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Medal Cards */}
      <div className="flex gap-8 mb-8 justify-center items-end">
        {/* 2nd Place */}
        <div className="flex-1 bg-[#FCE6F3] shadow-lg rounded-3xl p-4 text-center h-28 flex flex-col justify-center">
          <span className="mx-auto flex items-center justify-center w-10 h-10">
            <img
              src="./Silver.png"
              alt="Silver Medal"
              className="w-full h-full object-contain"
            />
          </span>
          <p className="mt-2 font-semibold text-[#1A1C2B]">ghr678</p>
        </div>

        {/* 1st Place */}
        <div className="flex-1 bg-[#FFEDD4] shadow-lg rounded-3xl p-6 text-center h-36 flex flex-col justify-center">
          <span className="mx-auto flex items-center justify-center w-12 h-12">
            <img
              src="./Gold.png"
              alt="Gold Medal"
              className="w-full h-full object-contain"
            />
          </span>
          <p className="mt-2 font-semibold text-[#1A1C2B]">sneha1809</p>
        </div>

        {/* 3rd Place */}
        <div className="flex-1 bg-[#DCFCE6] shadow-lg rounded-3xl p-4 text-center h-28 flex flex-col justify-center">
          <span className="mx-auto flex items-center justify-center w-10 h-10">
            <img
              src="./Bronze.png"
              alt="Bronze Medal"
              className="w-full h-full object-contain"
            />
          </span>
          <p className="mt-2 font-semibold text-[#1A1C2B]">br7609</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        <table className="w-full text-left border-separate border-spacing-y-4">
          <thead className="text-[#1A1C2B]  rounded-xl">
            <tr>
              <th className="p-3">Username</th>
              <th className="p-3">Rank</th>
              <th className="p-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={idx}
                className="bg-white  rounded-3xl overflow-hidden"
              >
                <td className="p-3 rounded-l-2xl">{item.username}</td>
                <td className="p-3">{item.rank}</td>
                <td className="p-3 rounded-r-2xl">{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mic Button */}
      <button className="absolute fixed bottom-6 right-6 bg-[#5D5FEF] text-white p-4 rounded-full shadow-lg hover:bg-[#4B4DDA] transition">
        <Mic size={24} />
      </button>
    </div>
  );
};

export default Leaderboard;
