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
    <div className="flex flex-row gap-x-8 items-center justify-center">
      {logos.map((logo, index) => (
        <Image src={logo} alt={`logo-${index}`} width={40} height={40}></Image>
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
