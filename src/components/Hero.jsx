import React from "react";
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

      <a
        href="#book"
        className="p-3 px-8 bg-[#000020] hover:bg-[#0a0a13] active:bg-[#0a0a13] rounded text-[#87b2f1] italic text-lg font-bold transition-all z-10"
      >
        Book A Trip
      </a>

      <div className="flex items-center justify-center flex-wrap gap-6 z-10">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor}
            alt={`Sponsor logo ${index + 1}`}
            className="w-[100px] sm:w-[120px] hover:opacity-80 cursor-pointer transition-transform transform hover:scale-95 active:scale-95"
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
