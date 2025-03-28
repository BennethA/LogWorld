/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Title = ({ first, second, third, fourth, fifth, sixth, description }) => {
  return (
    <div className="flex flex-col items-center z-10">
      {/* Motion for Title */}
      <motion.div
        whileInView={{ opacity: 10, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="z-10 w-full sm:w-[80%] flex items-center flex-col gap-3"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold font-serif">
          {first} <span className="text-[#87b2f1] italic">{second}</span>
          {third} <span className="text-[#87b2f1] italic">{fourth}</span>
          {fifth} <span className="text-[#87b2f1] italic">{sixth}</span>
        </h1>
        <p className="w-full sm:w-[80%] text-gray-300 leading-[20px] md:text-lg text-center">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Title;
