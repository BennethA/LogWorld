/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import airbnb from "../assets/images/airbnb.png";
import qatar from "../assets/images/qatar.png";
import bookings from "../assets/images/bookings.png";
import visa from "../assets/images/visa.png";
import Title from "./Title";

const Hero = () => {
  const sponsors = [airbnb, qatar, bookings, visa];

  return (
    <div
      id="home"
      className="pt-24 px-[5%] md:px-[7%] lg:px-[10%] relative flex items-center justify-center text-center flex-col gap-5"
    >
      <div className="h-[200px] w-[200px] rounded-full bg-[#2626a0] blur-2xl absolute top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <Title
        first="Book Your"
        second="Dream Trip, "
        third="Explore the"
        fourth="World, "
        fifth="Discover New"
        sixth="Adventures"
        description="We craft unforgettable experiences that transport you to stunning destinations where you can create lasting memories and connect with others. Each journey is designed to immerse you in the world's beauty."
      />

      {/* Motion for Button */}
      <motion.a
        href="#book"
        className="p-3 px-8 text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] rounded italic text-lg font-bold transition-all z-10 cursor-pointer"
      >
        Book A Trip
      </motion.a>

      {/* Motion for Sponsor Logos */}
      <motion.div
        whileInView={{ opacity: 10, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center flex-wrap gap-6 z-10"
      >
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor}
            loading="lazy"
            alt={`Sponsor logo ${index + 1}`}
            className="w-[100px] sm:w-[120px] hover:opacity-80 cursor-pointer transition-transform transform hover:scale-95 active:scale-95"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
