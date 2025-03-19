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
      days: "4 Days, 5 Nights",
      persons: "4",
      reviews: "123",
    },
    {
      img: hotel2,
      title: "Hilton Beach",
      price: "2,700",
      days: "3 Days, 4 Nights",
      persons: "2",
      reviews: "120",
    },
    {
      img: hotel3,
      title: "Levantine",
      price: "4,700",
      days: "5 Days, 6 Nights",
      persons: "6",
      reviews: "220",
    },
    {
      img: hotel4,
      title: "Exquiree",
      price: "3,800",
      days: "4 Days, 5 Nights",
      persons: "4",
      reviews: "153",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8">
      <Title
        first="Popular"
        second="Tours"
        description="Discover our popular all-in-one tour packages that make your travel effortless! Enjoy amazing deals on city tours, thrilling safaris, exciting water sports, and relaxing wellness retreats—all included!"
      />
      <div className="w-full max-w-[1200px] flex flex-col gap-4">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-center bg-[#1a1a2d] border border-gray-700 rounded-lg p-4 gap-4 hover:bg-transparent transition-all duration-300 ease-in-out"
          >
            <div className="w-full sm:w-[180px] h-[180px] object-cover">
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-200 ease-in-out hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-3 sm:w-[50%] md:w-[40%]">
              <p className="p-2 text-center border-[#87b2f1] border-2 rounded-md font-semibold transition-colors duration-300 ease-in-out">
                High Rating
              </p>
              <h3 className="text-lg font-bold">{tour.title}</h3>
              <p className="text-gray-300 text-sm">
                ${tour.price} <span className="text-gray-400">per person</span>
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:w-[40%] md:w-[30%] text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <p className="flex items-center gap-1">
                  <BiAlarm /> {tour.days}
                </p>
                <p>{tour.persons} persons</p>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <p>{tour.reviews}</p>
                <p>reviews</p>
              </div>
              <button className="p-3 rounded bg-[#000020] hover:bg-[#0a0a13] active:bg-[#0a0a13] text-[#87b2f1] transition-colors duration-200 ease-in-out w-full mt-4">
                Book Tour
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
