import React from "react";
import { GrReactjs } from "react-icons/gr";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { FaCss3, FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { LiaJsSquare } from "react-icons/lia";
import { RiBootstrapLine } from "react-icons/ri";
import { motion } from "motion/react";

export default function Technology() {
  const iconVariants = (duration) => ({
    initial: { y: -15 },
    animate: {
      y: [15, -15],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 lg:mt-0 md:mt-36 mt-64 pb-36">
      <motion.h1
      whileInView={{opacity: 1, y: 0}}
      initial ={{opacity: 0, y: -100}}
      transition={{duration: 1}}
      className="lg:mb-28 text-center text-4xl md:text-5xl text-white">
        Technologies
      </motion.h1>

       <motion.div
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -200}}
      transition={{duration: 1}}
      className="flex lg:mt-0 mt-20 md:px-0 px-12 flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        {[
          {
            Icon: AiOutlineHtml5,
            color: "text-orange-400",
            duration: 4,
            shadowColor: "rgba(253,186,116,0.9)", // orange-300
          },
          {
            Icon: FaCss3,
            color: "text-blue-400",
            duration: 5.5,
            shadowColor: "rgba(59,130,246,0.9)", // blue-500
          },
          {
            Icon: LiaJsSquare,
            color: "text-yellow-400",
            duration: 4.5,
            shadowColor: "rgba(250,204,21,0.9)", // yellow-400
          },
          {
            Icon: RiBootstrapLine,
            color: "text-purple-500",
            duration: 3.5,
            shadowColor: "rgba(168,85,247,0.9)", // purple-500
          },
          {
            Icon: GrReactjs,
            color: "text-cyan-400",
            duration: 3,
            shadowColor: "rgba(34,211,238,0.9)", // cyan-400
          },
          {
            Icon: SiTailwindcss,
            color: "text-cyan-400",
            duration: 4,
            shadowColor: "rgba(56,189,248,0.9)", // cyan-400
          },
          {
            Icon: FaNodeJs,
            color: "text-green-500",
            duration: 5,
            shadowColor: "rgba(34,197,94,0.9)", // green-500
          },
          {
            Icon: BiLogoMongodb,
            color: "text-green-500",
            duration: 3.5,
            shadowColor: "rgba(34,197,94,0.9)", // green-500
          },
          {
            Icon: SiExpress,
            color: "text-white",
            duration: 4,
            shadowColor: "rgba(255,255,255,0.9)", // white
          },
        ].map(({ Icon, color, duration, shadowColor }, index) => (
          <motion.div
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            key={index}
            style={{
              boxShadow: `0 0 20px ${shadowColor}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 40px ${shadowColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 10px ${shadowColor}`;
            }}
            className={`rounded-2xl border-4 hover:shadow-md border-neutral-800 p-5 my-2`}
          >
            <Icon className={`text-5xl md:text-6xl lg:text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div> 
      
    </div>
  );
}
