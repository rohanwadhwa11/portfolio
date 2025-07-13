import React, { useEffect, useState } from "react";
import { motion } from "motion/react"
import { HERO_CONTENT } from "../constants";
import Infinity from "./Infinity";

export default function Profile() {
  const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1,
      transition: {duration: 0.5, delay: delay}
    }
  });

  const [showBirds, setShowBirds] = useState(false);
  
      useEffect(() => {
      const timer = setTimeout(() => {
        setShowBirds(true);
      }, 10000); // ⏳ 5 seconds
  
      return () => clearTimeout(timer); // 🧹 Clean on unmount
    }, []);

  return (
    <div className=" mt-20 z-10 border-b border-neutral-900 pb-12 lg:pb-28 lg:mb-35 overflow-hidden">
      <div className="flex  flex-wrap">
        <div className="px-12 w-full lg:w-1/2">
          <div className="flex flex-col items-center  lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial= "hidden"
            animate= "visible"
            className="pb-10 text-6xl text-white font-thin tracking-light lg:mt-16 lg:text-8xl">
              Rohan Wadhwa
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial= "hidden"
            animate= "visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-4xl text-3xl tracking-tight text-transparent">
              MERN Stack Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial= "hidden"
            animate= "visible"
            className="my-2 max-w-xl py-6 font-light tracking-tight text-white text-lg">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center mt-16 lg:ms-52 ms-20">
    {showBirds && <Infinity />}
  </div>
        </div>
      </div>
    </div>
  );
}
