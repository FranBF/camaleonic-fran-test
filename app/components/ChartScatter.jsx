"use client";

import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { useEffect, useState } from "react";

export default function ChartScatter() {
  const [data2, setData2] = useState([]);
  const [keys, setKeys] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [userTodos, setUserTodos] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData2(json));
  }, []);
  useEffect(() => {
    if (data2.length !== 0) {
      setKeys(Object.keys(data2[0]));
      data2.map(
        (dat) => !userCount.includes(dat.userId) && userCount.push(dat.userId)
      );
      setUserTodos(
        Object.entries(
          data2.reduce((acc, todo) => {
            acc[todo.userId] = (acc[todo.userId] || 0) + 1;
            return acc;
          }, {})
        ).map(([userId, count]) => ({
          id: Number(userId),
          x1: count - Math.random(0, 9) * 10,
          y1: count - Math.random(0, 9) * 10,
          x2: count - Math.random(0, 9) * 10,
          y2: count - Math.random(0, 9) * 10,
        }))
      );
    }
  }, [data2]);

  return (
    <ScatterChart
      width={300}
      height={300}
      series={[
        {
          label: "How many todos per user",
          data: userTodos.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
        },
        {
          label: "How many todos per user part 2",
          data: userTodos.map((v) => ({ x: v.x2, y: v.y2, id: v.id })),
        },
      ]}
      slotProps={{ legend: { hidden: "true" } }}
    />
  );
}
