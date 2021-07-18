import React, { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { GetHistogram } from "../api/user";

export default function RenderLineChart() {
  debugger;
  const [data, setData] = useState([]);

  useEffect(() => {
    GetHistogram().then((res: any) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
}
