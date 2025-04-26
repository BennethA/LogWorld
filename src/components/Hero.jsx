/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import airbnb from "../assets/images/airbnb.png";
import qatar from "../assets/images/qatar.png";
import bookings from "../assets/images/bookings.png";
import visa from "../assets/images/visa.png";
import Title from "./Title";

const Hero = ({ darkMode }) => {
  const sponsors = [airbnb, qatar, bookings, visa];
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const numBubbles = 50;
    const bubbleArray = [];

    for (let i = 0; i < numBubbles; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      const moveX = (Math.random() * 200 - 100).toFixed(2); // range -100 to 100
      const moveY = (Math.random() * 200 - 100).toFixed(2); // range -100 to 100
      const animationDuration = Math.random() * 30 + 20; // Random duration between 20-50s
      const animationDelay = Math.random() * 10; // delay between 0-10s

      bubbleArray.push({
        x,
        y,
        moveX,
        moveY,
        animationDuration,
        animationDelay,
      });
    }

    setBubbles(bubbleArray);
  }, []);

  return (
    <div
      id="home"
      className="flex items-center justify-center px-[5%] md:px-[7%] lg:px-[10%] pb-8 flex-col gap-[80px] pt-24 relative overflow-hidden min-h-screen"
    >
      {/* {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="bubble"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.animationDelay}s`,
            "--move-x": `${bubble.moveX}px`,
            "--move-y": `${bubble.moveY}px`,
          }}
        />
      ))} */}
 
      {/* Floating gradient blobs for depth */}

      <div className="absolute top-[20%] w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#910f91] to-[#ff0080] blur-3xl opacity-50 animate-blob-1" />
      <div className="absolute top-[20%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#0d0d77] to-[#028090] blur-3xl opacity-60 animate-blob-2" />

      <Title
        darkMode={darkMode}
        first="Book Your"
        second="Dream Trip, "
        third="Explore the"
        fourth="World, "
        fifth="Discover New"
        sixth="Adventures"
        description="We craft unforgettable experiences that transport you to stunning destinations where you can create lasting memories and connect with others. Each journey is designed to immerse you in the world's beauty."
      />

      {/* Motion for Button */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="flex items-center flex-col gap-[80px]"
      >
        <a
          href="#book"
          className="relative z-10 p-3 px-8 text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] rounded italic text-lg font-bold transition-all cursor-pointer"
        >
          Book A Trip
        </a>

        <div
          className="relative z-10 flex items-center justify-center flex-wrap gap-6"
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
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
