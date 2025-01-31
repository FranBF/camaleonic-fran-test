"use client";

import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { BarChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

export default function ChartOne() {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    let sums = 0;
    if (data.length !== 0) {
      setKeys(Object.keys(data[0]));
      data.map(
        (dat) => !userCount.includes(dat.userId) && userCount.push(dat.userId)
      );
      setUserTodos(
        Object.entries(
          data.reduce((acc, todo) => {
            acc[todo.userId] = (acc[todo.userId] || 0) + 1;
            return acc;
          }, {})
        ).map(([userId, count]) => ({
          userId: Number(userId),
          count: Math.round(count - Math.random(0, 15) * 10),
        }))
      );
    }
  }, [data]);

  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: userCount,
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: userTodos.map((ut) => ut.count),
        },
      ]}
      width={600}
      height={300}
    />
  );
}
