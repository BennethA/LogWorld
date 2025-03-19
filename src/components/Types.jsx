import React from "react";
import { BiMapAlt } from "react-icons/bi";
import { BsUmbrella } from "react-icons/bs";
import { FaShip } from "react-icons/fa";
import { FcRight } from "react-icons/fc";
import { MdMuseum } from "react-icons/md";
import Title from "./Title";

const Types = () => {
  const tourTypes = [
    {
      img: <BiMapAlt />,
      title: "City Tours",
      description: "5 hours from",
      price: "200.00",
    },
    {
      img: <BsUmbrella />,
      title: "Beaches",
      description: "11 hours from",
      price: "350.00",
    },
    {
      img: <MdMuseum />,
      title: "Museum Tours",
      description: "11 hours from",
      price: "225.00",
    },
    {
      img: <FaShip />,
      title: "Ship Tours",
      description: "11 hours from",
      price: "880.00",
    },
  ];

  return (
    <div className="bg-[#000020] flex flex-col items-center gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8">
      <Title first="Tour" second="Types" />
      <div className="flex flex-wrap gap-6 justify-center sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24">
        {tourTypes.map((tour, index) => (
          <div
            key={index}
            className="w-full sm:w-[250px] md:w-[300px] p-6 bg-[#1a1a2d] border-2 border-gray-300 rounded-lg cursor-pointer flex flex-col items-center gap-4 hover:bg-[#01012c] hover:shadow-lg hover:shadow-black transition-all duration-300 ease-in-out"
          >
            <span className="text-4xl text-[#87b2f1]">{tour.img}</span>
            <p className="text-xl font-semibold text-white">{tour.title}</p>
            <p className="text-gray-400 text-lg">
              {tour.description}{" "}
              <span className="text-[#87b2f1] text-lg">${tour.price}</span>
            </p>
          </div>
        ))}
      </div>
      <button className="mt-8 py-3 px-8 border-2 border-[#87b2f1] rounded text-[#87b2f1] flex items-center gap-2 hover:bg-[#01012c] active:bg-[#01012c] transition-colors duration-300 ease-in-out md:text-lg font-semibold">
        View All <FcRight />
      </button>
    </div>
  );
};

export default Types;
