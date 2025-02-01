"use client";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";

export default function PieCharts() {
  const [data2, setData2] = useState([]);
  const [keys, setKeys] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [userTodos, setUserTodos] = useState([]);

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
          value: count - Math.random(0, 9) * 10,
          label: `User ${userId}`,
        }))
      );
    }
  }, [data2]);
  return (
    <PieChart
      series={[
        {
          data: userTodos,
        },
      ]}
      width={300}
      height={200}
      slotProps={{ legend: { hidden: "true" } }}
      margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
    />
  );
}
