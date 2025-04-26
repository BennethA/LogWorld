/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { BiAlarm } from "react-icons/bi";
import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";
import Title from "./Title";

const Popular = ({ darkMode }) => {
  const tours = [
    {
      img: hotel1,
      title: "Sheraton",
      price: "3,700",
      days: "4 Days, 5 Nights",
      persons: "4",
      reviews: "123",
    },
    {
      img: hotel2,
      title: "Hilton Beach",
      price: "2,700",
      days: "3 Days, 4 Nights",
      persons: "2",
      reviews: "120",
    },
    {
      img: hotel3,
      title: "Levantine",
      price: "4,700",
      days: "5 Days, 6 Nights",
      persons: "6",
      reviews: "220",
    },
    {
      img: hotel4,
      title: "Exquiree",
      price: "3,800",
      days: "4 Days, 5 Nights",
      persons: "4",
      reviews: "153",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8">
      <Title
        darkMode={darkMode}
        first="Popular"
        second="Tours"
        description="Discover our popular all-in-one tour packages that make your travel effortless! Enjoy amazing deals on city tours, thrilling safaris, exciting water sports, and relaxing wellness retreats—all included!"
      />
      <motion.div
        whileInView={{ opacity: 10, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="w-full max-w-[1200px] flex flex-col gap-4"
      >
        {tours.map((tour, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row justify-between items-center border-[#8080804f] border rounded-lg p-4 gap-4 transition-all duration-300 ease-in-out ${
              darkMode ? "bg-[#04040ea2]" : "bg-gray-300"
            }`}
          >
            <div className="w-full sm:w-[180px] h-[180px] object-cover overflow-hidden rounded">
              <motion.img
                loading="lazy"
                src={tour.img}
                alt={`${tour.title} Tour Image`}
                aria-label={`${tour.title} Image`}
                className="w-full h-full object-cover hover:scale-150 active:scale-150 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-3 sm:w-[50%] md:w-[40%] text-center">
              <p className="p-2 text-center border-[#87b2f1] border-2 rounded-md font-semibold transition-colors duration-300 ease-in-out">
                High Rating
              </p>
              <div className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold">
                {tour.title}
              </div>
              <p className="text-sm">
                ${tour.price} <span className="text-gray-400">per person</span>
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:w-[40%] md:w-[30%] text-sm">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <BiAlarm /> {tour.days}
                </span>
                <span>{tour.persons} persons</span>
              </div>
              <div className="flex items-center gap-1 text-center justify-center">
                {tour.reviews} reviews
              </div>
              <button
              type="button"
                aria-label="Book Tour"
                className="p-3 px-8 text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] rounded italic text-lg font-bold transition-all z-10 cursor-pointer"
              >
                Book Tour
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Popular;
