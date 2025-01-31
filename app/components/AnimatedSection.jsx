"use client";

import { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import CircleAnimation from "./CircleAnimation";

export default function AnimatedSection() {
  const data = [
    {
      color: "bg-[#04AEB7]",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet erat eleifend, venenatis enim dictum, tristique eros.",
      title: "Camaleonic Dashboard",
      letterColor: "text-white",
      img: "/image2.png",
    },
    {
      color: "bg-[#D498EA]",
      text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      title: "Awesome Tools",
      letterColor: "text-black",
      img: "/image3.png",
    },
    {
      color: "bg-[#FFFFFF]",
      text: "In aliquet pretium ante in mattis. Vivamus in sapien et ex vulputate viverra. Nulla lacinia eget lorem sit amet viverra.",
      title: "Great design",
      letterColor: "text-black",
      img: "/image4.png",
    },
    {
      color: "bg-[#037EC7]",
      text: "Proin pharetra, felis et volutpat posuere, nisi sem aliquam risus, in egestas arcu diam nec lacus. Donec gravida tortor at arcu sagittis pharetra.",
      title: "Wonderful way of working",
      letterColor: "text-red-200",
      img: "/image5.png",
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
      className={`w-11/12 md:w-3/4 self-center h-[60vh] md:h-[32vh] rounded-lg flex flex-col  items-center justify-items-center justify-between ${data[index].color}`}
    >
      <div
        className={`w-11/12 md:w-3/4 self-center h-[60vh] md:h-[32vh] rounded-lg flex flex-col md:flex-row items-center justify-items-center justify-between ${data[index].color}`}
      >
        <div className="flex flex-col w-full text-center md:text-start md:w-1/2 h-full p-8 gap-y-4 items-center md:items-start justify-center">
          <h1 className={`${data[index].letterColor} text-[40px] font-bold`}>
            {data[index].title}
          </h1>
          <p className={`${data[index].letterColor} text-[25px]`}>
            {data[index].text}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center h-full p-4 md:p-0 mt-[-120px] md:mt-0">
          <Image
            src={data[index].img}
            alt="Imaged displayed"
            width={500}
            height={350}
            className="rounded-xl"
          ></Image>
        </div>
      </div>

      <CircleAnimation></CircleAnimation>
    </div>
  );
}
