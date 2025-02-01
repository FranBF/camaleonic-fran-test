"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";

export default function ChartLine() {
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
          count: Number(count - Math.random(0, 9) * 10),
        }))
      );
    }
  }, [data]);
  return (
    <LineChart
      xAxis={[{ data: userCount }]}
      series={[
        {
          data: userTodos.map((ut) => ut.count),
        },
      ]}
      width={300}
      height={300}
    />
  );
}
