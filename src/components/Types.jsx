/* eslint-disable no-unused-vars */
import React from "react";
import { BiMapAlt } from "react-icons/bi";
import { BsUmbrella } from "react-icons/bs";
import { FaShip } from "react-icons/fa";
import { FcRight } from "react-icons/fc";
import { MdMuseum } from "react-icons/md";
import Title from "./Title";
import { motion } from "framer-motion";

const Types = ({ darkMode }) => {
  const tourTypes = [
    {
      img: <BiMapAlt />,
      title: "City Tours",
      description: "5 hours from",
      price: "200.00",
    },
    {
      img: <BsUmbrella />,
      title: "Beaches",
      description: "11 hours from",
      price: "350.00",
    },
    {
      img: <MdMuseum />,
      title: "Museum Tours",
      description: "11 hours from",
      price: "225.00",
    },
    {
      img: <FaShip />,
      title: "Ship Tours",
      description: "11 hours from",
      price: "880.00",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8">
      <Title darkMode={darkMode} first="Tour" second="Types" />
      <motion.div
        whileInView={{ opacity: 50, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap gap-6 justify-center sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24"
      >
        {tourTypes.map((tour, index) => (
          <div
            key={index}
            className={`w-full sm:w-[250px] md:w-[300px] p-6 border-2 border-[#8080804f] rounded-lg cursor-pointer flex flex-col items-center gap-4 transition-all duration-300 ease-in-out ${
              darkMode
                ? "bg-[#04040ea2] hover:bg-[#0a0a13] active:bg-[#0a0a13]"
                : "bg-gray-300 hover:text-white hover:bg-[#9090a0d0] active:bg-[#9090a0d0]"
            }`}
          >
            <span className="text-4xl text-[#87b2f1]">{tour.img}</span>
            <p className="text-xl font-semibold">{tour.title}</p>
            <p className="text-lg">
              {tour.description}{" "}
              <span className="text-[#87b2f1] text-lg">${tour.price}</span>
            </p>
          </div>
        ))}
      </motion.div>
      <button type="button" className="mt-8 py-3 px-8 border-2 border-[#87b2f1] rounded text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] transition-colors duration-300 ease-in-out md:text-lg font-semibold flex items-center gap-2">
        View All <FcRight />
      </button>
    </div>
  );
};

export default Types;
