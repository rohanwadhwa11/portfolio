import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";
import profile from "../assets/profile.jpg"

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4 h-[78vh] sm:4/5">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl md:text-5xl text-white"
      >
        About <span className="text-neutral-300">Me</span>
      </motion.h1>

      <div className="flex flex-wrap justify-center">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-1/4 mx-5  lg:block hidden"
        >
          <div className="w-full items-center flex justify-center">
            <img
              src={profile} // Replace with actual image path
              alt="about img"
              className="rounded-2xl w-64 h-64 object-cover md:w-64 md:h-72 sm:h-24 sm:w-24 shadow-lg"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-3/5 lg:px-0 px-4"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="text-white font-light text-lg md:text-xl leading-xl tracking-wider text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
