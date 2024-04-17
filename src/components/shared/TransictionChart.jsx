import React from "react";
import { ChartData } from "../../Utils/conts/ChartData";
import {
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const TransictionChart = () => {
  return (
    <div className="h-[22rem] bg-white p-4 rounded border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Transiction</strong>
      <div className="w-full mt-3 flex-1 text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={ChartData}
          margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Income" fill="#0ea5e9" />
          <Bar dataKey="Expense" fill="#ea580c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default TransictionChart;
