import React from "react";
import { BiMapAlt } from "react-icons/bi";
import { BsUmbrella } from "react-icons/bs";
import { FaShip } from "react-icons/fa";
import { FcRight } from "react-icons/fc";
import { MdMuseum } from "react-icons/md";
import Title from "./Title";

const Type = () => {
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
    <div className="flex items-center justify-center px-3 flex-col gap-5 sm:px-[100px] lg:px-[20%] pt-[60px] bg-[#000020] pb-5">
      <Title first="Tour" second="Types" />
      <div className=" flex gap-3 flex-wrap items-center justify-around">
        {tourTypes.map((tour, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 cursor-pointer p-5 rounded flex flex-col gap-2 items-center hover:text-black hover:shadow-xl hover:shadow-black"
          >
            <span className="text-3xl text-[#87b2f1]">{tour.img}</span>
            <p className="md:text-lg font-bold text-white">{tour.title}</p>
            <p className="text-gray-500 md:text-lg">
              {tour.description}{" "}
              <span className="text-[#87b2f1] md:text-lg">${tour.price} </span>
            </p>
          </div>
        ))}
      </div>
      <button className="py-2 px-6 border-2 rounded border-[#87b2f1] text-[#87b2f1] flex gap-3 items-center flex-wrap hover:bg-[#01012c] active:bg-[#01012c] cursor-pointer md:font-bold md:text-lg">
        View All <FcRight />
      </button>
    </div>
  );
};

export default Type;
