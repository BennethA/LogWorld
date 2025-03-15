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
      className="pt-[100px] flex items-center justify-center text-center flex-col gap-5 sm:px-6 px-3 lg:px-[20%] relative"
    >
      <div className="h-[200px] w-[200px] rounded-full bg-[#2626a0] blur-2xl top-[50%] absolute"></div>
      <Title
        first="Book your"
        second="Dream Trips, "
        third="Explore the"
        fourth="World, "
        fifth="Discover new"
        sixth="Adventures"
        description="We create unforgettable experience that transport you to breathtaking
        locations where you can build meaningful connections with others and
        gather stories that you will trasure for a lifetime. Each journey is
        designed to immerse you in the beauty of the world!"
      />

      <a
        href="#book"
        className="p-3 px-8 bg-[#000020] hover:bg-[#0a0a13] active:bg-[#0a0a13] rounded text-[#87b2f1] italic font-bold text-lg z-10"
      >
        Book A Trip
      </a>
      <div className="flex items-center justify-center flex-wrap gap-4 z-10">
        {sponsors.map((sponsor, index) => (
          <img
            className="max-w-[130px] hover:opacity-80 cursor-pointer hover:scale-95 active:scale-95 tours"
            key={index}
            src={sponsor}
            alt={sponsor}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
