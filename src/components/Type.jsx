import React from 'react'
import { BiMap } from 'react-icons/bi';
import { BsUmbrella } from 'react-icons/bs';
import { FaShip } from 'react-icons/fa';
import { FcRight } from 'react-icons/fc';
import { MdMuseum } from 'react-icons/md';

const Type = () => {
  const tourTypes = [
    {
      img: <BiMap />,
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
    <div className="flex items-center justify-center p-3 flex-col gap-5 sm:px-[100px] bg-white pt-[70px]">
      <h1 className=" w-[70%] text-center text-3xl font-bold">
        Tour <span className="text-[#87b2f1] italic">Type</span>
      </h1>
      <div className=" flex gap-3 flex-wrap items-center justify-around">
        {tourTypes.map((tour, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 cursor-pointer p-5 rounded flex flex-col gap-2 items-center hover:text-black hover:shadow-md hover:shadow-black"
          >
            <span className="text-3xl text-[#87b2f1]">{tour.img}</span>
            <p className="text-gray-500 font-bold">{tour.title}</p>
            <p className="text-gray-500 text-sm font-bold">
              {tour.description}{" "}
              <span className="text-[#87b2f1]">${tour.price} </span>
            </p>
          </div>
        ))}
      </div>
      <button className="py-2 px-6 border-2 rounded border-[#87b2f1] text-[#87b2f1] font-bold flex gap-3 items-center flex-wrap hover:bg-gray-300 cursor-pointer">
        View All <FcRight />
      </button>
    </div>
  );
}

export default Type