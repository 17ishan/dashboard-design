import React from "react";
import SalesCard from "../components/SalesCard";
import VisitorInsights from "../components/charts/VisitorInsights";
import TotalRevenue from "../components/charts/Totalrevenue";
import CustomerSatisfaction from "../components/charts/CustomerSatisfaction";
import TargetAndReality from "../components/charts/TargetAndReality";
import TopProducts from "../components/charts/TopProducts";
import WorldMap from "../components/charts/WorldMap ";
import VolumeAndService from "../components/charts/VolumeAndService";

const Dashboard = () => {
  return (
    <div className=" bg-slate-100 min-h-screen p-3 px-4 mt-20 pb-6">

      <div className="space-y-3">
        {/* 1st row */}
        <div className="flex gap-4">
          <div className="">
            <SalesCard />
          </div>
          <div className="">
            <VisitorInsights />
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex gap-3">
          <div className="">
            <TotalRevenue />
          </div>
          <div className="w-3/12">
            <CustomerSatisfaction />
          </div>
          <div className="w-3/12  ml-10">
            <TargetAndReality />
          </div>
        </div>

        {/* 3rd row */}
        <div className="flex gap-4">
          <div className="w-4/12">
            <TopProducts />
          </div>
          <div className="w-4/12">
            <WorldMap />
          </div>
          <div className="w-4/12">
            <VolumeAndService />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
