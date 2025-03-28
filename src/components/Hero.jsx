/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import airbnb from "../assets/images/airbnb.png";
import qatar from "../assets/images/qatar.png";
import bookings from "../assets/images/bookings.png";
import visa from "../assets/images/visa.png";
import Title from "./Title";

const Hero = () => {
  const sponsors = [airbnb, qatar, bookings, visa];
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const numBubbles = 50;
    const bubbleArray = [];

    for (let i = 0; i < numBubbles; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const animationDuration = Math.random() * 10 + 5; // Random duration between 5-15 seconds
      const animationDelay = Math.random() * 5; // Random delay between 0-5 seconds

      bubbleArray.push({
        x,
        y,
        animationDuration,
        animationDelay,
      });
    }

    setBubbles(bubbleArray);
  }, []);


  return (
    <div
      id="home"
      className="relative flex items-center justify-center text-center flex-col gap-5 pt-24 px-[5%] md:px-[7%] lg:px-[10%] overflow-hidden"
    >
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="bubble"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.animationDelay}s`,
          }}
        />
      ))}

      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2727bd] to-[#1f033f] opacity-90 z-0" />

      {/* Floating gradient blobs for depth */}

      <div className="absolute top-[20%] left-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#910f91] to-[#ff0080] blur-3xl opacity-50 animate-blob-1" />
      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-[#0d0d77] to-[#028090] blur-3xl opacity-60 animate-blob-2" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4d034d] to-[#aaffaa] blur-2xl opacity-40 animate-blob-3" />

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
        className="relative z-10 p-3 px-8 text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] rounded italic text-lg font-bold transition-all cursor-pointer"
      >
        Book A Trip
      </motion.a>

      {/* Motion for Sponsor Logos */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
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
      </motion.div>
    </div>
  );
};

export default Hero;
