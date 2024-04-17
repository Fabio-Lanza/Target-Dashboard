import React from "react";
import DashboardStatsGrid from "../components/shared/DashboardStatsGrid";
import TransictionChart from "../components/shared/TransictionChart";
import BuyerProfileChart from "../components/shared/BuyerProfileChart";
import RecentOrders from "../components/shared/RecentOrders";
import PopularProducts from "../components/shared/PopularProducts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 mt-2 mx-2">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransictionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
