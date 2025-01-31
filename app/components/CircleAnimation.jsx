"use client";

import { motion } from "motion/react";

export default function CircleAnimation() {
  return (
    <div className="w-full h-8 flex items-center justify-center gap-x-2">
      <div className="w-2 h-2 bg-black rounded-full"></div>
      <div className="w-2 h-2 bg-black rounded-full"></div>
      <motion.div
        initial={{ width: "8px", backgroundColor: "black" }}
        animate={{ width: "30px", backgroundColor: "black" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 4,
        }}
        className="bg-black h-2 rounded-full"
      ></motion.div>
      <div className="w-2 h-2 bg-black rounded-full"></div>
      <div className="w-2 h-2 bg-black rounded-full"></div>
    </div>
  );
}
