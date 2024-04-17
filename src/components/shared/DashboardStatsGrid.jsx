import React from "react";
import { IoBagHandle, IoCartSharp } from "react-icons/io5";
import { IoCashOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";

const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="bg-sky-500 rounded-full h-12 w-12 flex items-center justify-center">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3425.00
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className="bg-orange-500 rounded-full h-12 w-12 flex items-center justify-center">
          <IoCashOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $5425.00
            </strong>
            <span className="text-sm text-green-500 pl-2">+534</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center">
          <IoPeopleSharp className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3425.00
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className="bg-purple-500 rounded-full h-12 w-12 flex items-center justify-center">
          <IoCartSharp className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3425.00
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStatsGrid;

const BoxWrapper = ({ children }) => {
  return (
    <div className="bg-white rounded p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
};
