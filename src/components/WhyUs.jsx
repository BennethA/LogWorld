import React from 'react'
import { BiCar, BiHotel } from 'react-icons/bi';
import { CiPlane } from 'react-icons/ci';
import { LuLuggage } from 'react-icons/lu';

const whyUs = () => {
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
    <div className="flex items-center p-3 sm:px-[100px] justify-between gap-3 flex-wrap bg-black pt-[70px]">
      <div className="sm:w-[45%]">
        <img
          src="src/assets/world.png"
          alt="World"
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" sm:w-[45%] w-full text-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-center text-[#87b2f1]">
          Why Choose Us
        </h2>
        <p className=" text-gray-500 font-semibold text-sm leading-4">
          Enjoy different experience in every place you visit and discover new
          and affordable adventures of course.
        </p>
        <div className="flex gap-3 flex-col">
          {reasons.map((reason, index) => (
            <button
              key={index}
              className="flex gap-4 items-center bg-[#1f1f1f] rounded px-4 py-2 hover:bg-slate-300 hover:text-black text-white cursor-pointer"
            >
              <div className="bg-white p-1 text-4xl rounded text-black">
                {reason.icon}
              </div>
              <div className="flex flex-col items-start">
                <h4 className="font-bold">{reason.title}</h4>
                <p className="text-gray-400 font-semibold text-sm">
                  {reason.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default whyUs