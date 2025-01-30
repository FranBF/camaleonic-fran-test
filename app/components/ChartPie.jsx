"use client";

import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";

export default function ChartPie() {
  const data3 = [
    { label: "Group A", value: 400 },
    { label: "Group B", value: 300 },
    { label: "Group C", value: 300 },
    { label: "Group D", value: 200 },
    { label: "Group E", value: 278 },
    { label: "Group F", value: 189 },
  ];

  /* const [keys, setKeys] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [userTodos, setUserTodos] = useState([]);
  const [chartData, setChartData] = useState([]); */

  /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData2(json));
  }, []);

  console.log(data2); */

  /* useEffect(() => {
    let sums = 0;
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
        ).map(([userId, count]) => ({ userId: Number(userId), count }))
      );
    }
  }, [data2]); */

  /* useEffect(() => {
    if (userTodos.length !== 0) {
      userCount.forEach((uc) =>
        data.map((dat) => {
          if (uc === dat.userId) {
            sums++;
            userTodos.push(sums);
          }
        })
      );
    }
  }, [userTodos]); */

  return (
    <PieChart
      series={[
        {
          startAngle: -90,
          endAngle: 90,
          data3,
        },
      ]}
      height={300}
    />
  );
}
