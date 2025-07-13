import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8}}
        className="my-20 text-center text-4xl text-white"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap  items-center lg:justify-center md:px-0 px-4">
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 0.8}}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial ={{opacity: 0, x: 100}}
            transition={{duration: 0.8}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 text-lg font-semibold">
                {experience.role} -{" "}
                <span className="text-md text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-md font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
