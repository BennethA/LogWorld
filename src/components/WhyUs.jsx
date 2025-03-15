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
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <BiCar />,
      title: "Car Transfers",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <BiHotel />,
      title: "Accomodation",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <LuLuggage />,
      title: "Packaged Tour",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div
      id="whyUs"
      className="flex items-center p-3 sm:px-[100px] sm:justify-between gap-3 flex-wrap bg-black pt-[70px] lg:px-[20%] justify-center"
    >
      <div className="sm:w-[45%] w-[80%]">
        <img
          src={world}
          alt="World"
          className="h-full w-full hover:scale-95 active:scale-95 tours"
        />
      </div>
      <div className="sm:w-[45%] text-center flex flex-col gap-5">
        <Title first="" second="Why Choose Us" description="
          Enjoy different experience in every place you visit and discover new
          and affordable adventures of course."/>
        <div className="flex gap-3 flex-col">
          {reasons.map((reason, index) => (
            <button
              key={index}
              className="flex gap-4 items-center bg-[#1f1f1f] rounded px-4 py-2 hover:hover:opacity-80 text-white cursor-pointer"
            >
              <div className="bg-white p-1 text-3xl rounded text-black">
                {reason.icon}
              </div>
              <div>
                <h4 className="font-bold text-start text-lg">{reason.title}</h4>
                <p className="text-gray-400 font-semibold text-sm text-start">
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
