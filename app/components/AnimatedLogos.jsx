"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function AnimatedLogos() {
  const logos = [
    "/tikLogo.png",
    "/whatLogo.png",
    "/faceLogo.png",
    "/redditLogo.png",
    "/xLogo.png",
  ];
  return (
    <div className="flex flex-row gap-x-2 mt-[-20px] xl:mt-0 md:gap-x-8 items-center justify-center p-4">
      {logos.map((logo, index) => (
        <Image
          src={logo}
          alt={`logo-${index}`}
          width={40}
          height={40}
          className="w-8 h-8 lg:w-12 lg:h-12"
          key={index}
        ></Image>
      ))}
    </div>
  );
}
{
  /* <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 2,
      }}
      className="flex flex-row gap-x-8"
    >
      {[...logos, ...logos].map((src, index) => {
        <Image src={src} alt={`logo-${index}`} width={50} height={50}></Image>;
      })}
      <p>Hola</p>
      <p>Hola</p>
      <p>Hola</p>
      <p>Hola</p>
    </motion.div>
 */
}
