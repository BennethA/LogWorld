/* eslint-disable no-unused-vars */
import React from "react";
import { BiCar, BiHotel } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";
import { LuLuggage } from "react-icons/lu";
import world from "../assets/images/world.png";
import Title from "./Title";
import { motion } from "framer-motion";

const WhyUs = () => {
  const reasons = [
    {
      icon: <CiPlane />,
      title: "Flight Tickets",
      description:
        "Book your flights with us and enjoy competitive prices, flexible booking options, and personalized customer support.",
    },
    {
      icon: <BiCar />,
      title: "Car Transfers",
      description:
        "We offer reliable and comfortable car transfer services to and from airports, hotels, and other destinations, ensuring a stress-free travel experience.",
    },
    {
      icon: <BiHotel />,
      title: "Accommodation",
      description:
        "Choose from our carefully curated selection of hotels, resorts, and vacation rentals, each offering a unique blend of comfort, amenities, and local charm.",
    },
    {
      icon: <LuLuggage />,
      title: "Packaged Tours",
      description:
        "Let us take care of every detail with our expertly crafted packaged tours, featuring handpicked accommodations, guided excursions, and authentic local experiences.",
    },
  ];

  return (
    <div
      id="whyUs"
      className="flex items-center sm:justify-between gap-6 flex-wrap bg-[#000020] justify-center px-[5%] md:px-[7%] lg:px-[10%]  pt-16 pb-8"
    >
      <motion.div
        whileInView={{ opacity: 10, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="sm:w-[45%] lg:w-[40%]"
      >
        <img
          src={world}
          alt="World"
          loading="lazy"
          className="h-full w-full hover:scale-95 active:scale-95 transition-transform duration-300"
        />
      </motion.div>
      <div className="sm:w-[45%] lg:w-[50%] text-center flex flex-col gap-5 items-center">
        <Title
          second="Why Choose Us"
          description="Discover unique and affordable travel experiences at every destination with us."
        />
        <motion.div
        whileInView={{ opacity: 10, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1 }}
        className="flex gap-4 flex-col">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 items-center bg-[#000020] transition-colors duration-200 flex-wrap"
            >
              <div className="bg-white p-3 text-3xl text-black rounded-full hover:rotate-[360deg] transition-all duration-300">
                {reason.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg text-left text-white">
                  {reason.title}
                </h4>
                <p className="text-gray-400 text-sm text-left text-wrap md:text-base">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
