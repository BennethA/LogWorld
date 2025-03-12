import React from "react";
import tour1 from "../assets/images/tour1.jpg";
import tour2 from "../assets/images/tour2.jpg";
import tour3 from "../assets/images/tour3.jpg";
import tour4 from "../assets/images/tour4.jpg";
import tour5 from "../assets/images/tour5.jpg";
import tour6 from "../assets/images/tour6.jpg";
import tour7 from "../assets/images/tour7.jpg";
import tour8 from "../assets/images/tour8.jpg";
import tour9 from "../assets/images/tour9.jpg";
import tour10 from "../assets/images/tour10.jpg";

const Destinations = () => {
  const places = [
    tour1,
    tour2,
    tour3,
    tour4,
    tour5,
    tour6,
    tour7,
    tour8,
    tour9,
    tour10,
  ];
  return (
    <div
      id="about"
      className="flex items-center justify-center p-3 flex-col gap-5 sm:px-[100px] lg:px-[20%] pt-[70px]"
    >
      <div className=" w-[70%] text-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-center">
          Popular <span className="text-[#87b2f1] italic">Destination</span>
        </h2>
        <p className=" text-gray-500 font-semibold text-sm leading-4">
          Filled with exciting experinces and activities, the world has
          something for every traveler. Discover amazing deals on city tours,
          desert adventure, water sports, amusement parks and refreshing
          wellness retreats.
        </p>
      </div>
      <div className="flex overflow-x-auto">
        {places.map((place, index) => (
          <img
            key={index}
            src={place}
            alt={place}
            className="m-1 rounded h-[350px] w-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
