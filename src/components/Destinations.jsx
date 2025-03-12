import React from "react";

const Destinations = () => {
  const places = [
    "src/assets/tour1.jpg",
    "src/assets/tour2.jpg",
    "src/assets/tour3.jpg",
    "src/assets/tour4.jpg",
    "src/assets/tour5.jpg",
    "src/assets/tour6.jpg",
    "src/assets/tour7.jpg",
    "src/assets/tour8.jpg",
    "src/assets/tour9.jpg",
    "src/assets/tour10.jpg",
  ];
  return (
    <div
      id="about"
      className="flex items-center justify-center p-3 flex-col gap-5 sm:px-[100px] pt-[70px]"
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
