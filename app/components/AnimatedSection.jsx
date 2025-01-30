"use client";

import { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";

export default function AnimatedSection() {
  const data = [
    {
      color: "bg-[#04AEB7]",
      text: "Hola que tal",
      title: "Me llamo Fran",
      letterColor: "text-white",
    },
    {
      color: "bg-[#E91D63]",
      text: "Hola que tal 2",
      title: "Me llamo Fran",
      letterColor: "text-orange-200",
    },
    {
      color: "bg-[#1C2639]",
      text: "Hola que tal 3",
      title: "Me llamo Fran",
      letterColor: "text-green-200",
    },
    {
      color: "bg-[#037EC7]",
      text: "Hola que tal 4",
      title: "Me llamo Fran",
      letterColor: "text-red-200",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-11/12 md:w-3/4 self-center h-64 md:h-[32vh] rounded-lg flex items-center justify-items-center justify-between ${data[index].color}`}
    >
      <div className="flex flex-col w-1/2 h-full p-8 gap-y-4">
        <h1 className={`${data[index].letterColor} text-[40px] font-bold`}>
          {data[index].title}
        </h1>
        <p className={`${data[index].letterColor} text-[25px]`}>
          {data[index].text}
        </p>
      </div>
    </div>
  );
}
