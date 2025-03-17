import React from "react";
import { BiAlarm } from "react-icons/bi";
import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";
import Title from "./Title";

const Popular = () => {
  const tours = [
    {
      img: hotel1,
      title: "Sheraton",
      price: "3,700",
      days: "4 Days 5 Nights",
      persons: "4",
      reviews: "123",
    },
    {
      img: hotel2,
      title: "Hilton Beach",
      price: "2,700",
      days: "3 Days 4 Nights",
      persons: "2",
      reviews: "120",
    },
    {
      img: hotel3,
      title: "Levantine",
      price: "4,700",
      days: "5 Days 6 Nights",
      persons: "6",
      reviews: "220",
    },
    {
      img: hotel4,
      title: "Exquiree",
      price: "3,800",
      days: "4 Days 5 Nights",
      persons: "4",
      reviews: "153",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center px-3 flex-col gap-5 sm:px-[100px] lg:px-[20%] pt-[60px] pb-5">
        <Title
          first="Popular"
          second="Tours"
          description="Discover our popular all-in-one tour packages that makes your travel
            effortless! Enjoy amazing deals on city tours, thrilling safaries,
            exciting water sports and relaxing wellness retreats-all included!"
        />
        <div className="flex flex-col gap-1 max-w-[800px]">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="flex justify-between items-center border cursor-pointer border-gray-300 rounded overflow-hidden gap-4 hover:bg-[#01012c] flex-wrap bg-[#000020] p-2"
            >
              <div className="h-[180px] w-[180px] object-cover">
                <img
                  src={tour.img}
                  alt={tour.img}
                  className="w-full object-cover h-full rounded hover:scale-95 tours active:scale-95"
                />
              </div>
              <div className="flex flex-col gap-3">
                <button className="p-2 bg-blue-400 hover:bg-[#000020] active:opacity-80 rounded cursor-pointer md:text-lg md:font-bold">
                  High Rate
                </button>
                <h3 className="md:text-lg font-bold">{tour.title}</h3>
                <p className="md:text-lg">
                  ${tour.price}
                  <span className="text-gray-400 text-sm">per person</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-400 md:font-bold">
                  <p className="flex items-center gap-1">
                    <BiAlarm />
                    {tour.days}
                  </p>
                  <p>{tour.persons} persons</p>
                </div>
                <div className="flex items-center gap-1 md:font-bold">
                  <p>{tour.reviews} </p>
                  <p className="text-gray-400">reviews</p>
                </div>
                <button className="p-2 border-2 border-[#87b2f1] rounded text-[#87b2f1] w-full hover:bg-[#000020] active:bg-[#000020] cursor-pointer md:text-lg md:font-bold">
                  Book Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
