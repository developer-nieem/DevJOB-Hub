import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const data = [
        { name: "A 1", marks: 60 },
        { name: "A 2", marks: 60 },
        { name: "A 3", marks: 60 },
        { name: "A 4", marks: 60 },
        { name: "A 5", marks: 60 },
        { name: "A 6", marks: 60 },
        { name: "A 7", marks: 60 },
      ];

  return (
    <div className="m-auto w-75 my-5">
        
        <AreaChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
        
      
    </div>
  );
};

export default Statistics;
