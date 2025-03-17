import React from "react";
import { BiCar, BiHotel } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";
import { LuLuggage } from "react-icons/lu";
import world from "../assets/images/world.png";
import Title from "./Title";

const WhyUs = () => {
  const reasons = [
    {
      icon: <CiPlane />,
      title: "Flight Ticket ",
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
      title: "Accomodation",
      description:
        "Choose from our carefully curated selection of hotels, resorts, and vacation rentals, each offering a unique blend of comfort, amenities, and local character.",
    },
    {
      icon: <LuLuggage />,
      title: "Packaged Tour",
      description:
        "Let us take care of every detail with our expertly crafted packaged tours, featuring handpicked accommodations, guided excursions, and authentic local experiences.",
    },
  ];
  return (
    <div
      id="whyUs"
      className="flex items-center pb-5 sm:px-[100px] sm:justify-between gap-3 flex-wrap bg-[#000020] pt-[60px] lg:px-[20%] justify-center"
    >
      <div className="sm:w-[45%]">
        <img
          src={world}
          alt="World"
          className="h-full w-full hover:scale-95 active:scale-95 tours"
        />
      </div>
      <div className="sm:w-[45%] text-center flex flex-col gap-5 items-center">
        <Title
          first=""
          second="Why Choose Us"
          description="
          Enjoy different experience in every place you visit and discover new
          and affordable adventures of course."
        />
        <div className="flex gap-3 flex-col">
          {reasons.map((reason, index) => (
            <button
              key={index}
              className="flex gap-4 items-center bg-[#000020] rounded px-4 py-2"
            >
              <div className="bg-white p-1 text-3xl text-black rounded-full">
                {reason.icon}
              </div>
              <div>
                <h4 className="font-bold text-start md:text-lg">{reason.title}</h4>
                <p className="text-gray-400 text-sm text-start md:font-bold">
                  {reason.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
