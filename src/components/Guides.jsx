/* eslint-disable no-unused-vars */
import React from "react";
import fishing from "../assets/images/fishing.jpg";
import mountain from "../assets/images/mountain.jpg";
import dessert from "../assets/images/dessert.jpg";
import jetski from "../assets/images/jetski.jpg";
import Title from "./Title";
import { motion } from "framer-motion";

const Guides = () => {
  const guiding = [
    {
      img: mountain,
      title:
        "The true adventure of traveling composes the thrill of Mountain Climbing",
      description:
        "Climbing mountains offers an unparalleled sense of achievement and connection with nature.",
      date: "June 3, 2025",
    },

    {
      img: dessert,
      title: "The ultimate adventure awaits with a thrilling desert safari.",
      description:
        "Experience the vastness of the desert as you embark on a thrilling safari adventure.",
      date: "May 11, 2025",
    },
    {
      img: jetski,
      title:
        "Get ready for the ultimate thrill with an exhilarating jet ski adventure on open water!",
      description:
        "Feel the adrenaline rush as you speed across the water on a jet ski, exploring the coastline.",
      date: "Mar 5, 2025",
    },
  ];

  return (
    <div
      id="blogs"
      className="flex items-center justify-center gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8 flex-col"
    >
      <Title
        first="Blogs & Travel"
        second="Guides"
        description="Explore a world of thrilling experiences, from mountain climbing to desert safaris, and water sports. Find the best travel adventures tailored for every type of traveler."
      />
      <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        <motion.div
        whileInView={{ opacity: 10, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }} className="w-full flex flex-col gap-4">
          <img
            src={fishing}
            alt="fishing"
            loading="lazy"
            className="rounded-xl w-full h-[250px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="flex gap-2 justify-between items-center md:text-lg">
            <h3 className="font-bold text-xl">
              The real travel experience includes fishing.
            </h3>
            <p className="text-gray-400 text-sm">March 5, 2025</p>
          </div>
          <p className="text-sm text-gray-400 md:text-base leading-6">
            Fishing is more than just a hobby; it's an adventure. From casting a
            line to reeling in the big one, this activity brings tranquility and
            excitement together.
          </p>
        </motion.div>
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full border-t-2 flex justify-center items-stretch gap-4 flex-wrap sm:border-none border-gray-300 pt-4 sm:pt-0">
          {guiding.map((guide, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 sm:gap-6 transition-all duration-300 ease-in-out p-4 sm:p-6 border rounded max-w-[300px]"
            >
              <div className="w-full flex flex-col gap-2">
                <h3 className="font-bold text-xl sm:text-2xl text-[#87b2f1] leading-[20px]">
                  {guide.title}
                </h3>
                <p className="text-sm sm:text-lg text-gray-400 leading-5">
                  {guide.description}
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-500">
                  {guide.date}
                </p>
              </div>
              <div className="w-full h-[180px] sm:h-[200px] overflow-hidden rounded-lg">
                <img
                  src={guide.img}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform transform hover:scale-105"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Guides;
