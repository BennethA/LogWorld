import React, { useState } from 'react'
import { CiLocationOff, CiPlane } from 'react-icons/ci';

const Book = () => {
  const [bookType, setBookType] = useState("Book A Flight");
  const options = [
    { name: "Book A Flight", icon: <CiLocationOff /> },
    { name: "Book A Layover", icon: <CiPlane /> },
  ];
  return (
    <div className="sm:px-[100px] p-3 flex items-center justify-center flex-col gap-6  pt-[70px]">
      <div className=" w-[70%] text-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-center">
          What&#39;s Your{" "}
          <span className="text-[#87b2f1] italic">Destination</span>
        </h2>
        <p className=" text-gray-500 font-semibold leading-4">
          Experience world-class services and renowned hospitality when you book
          your trip to anywhere wuth our Partnered Airway, the award winning
          Airlines offer a journey of luxery comfort and exceptional care!
        </p>
      </div>
      <div className="bg-slate-950 w-full mb-3 rounded overflow-hidden">
        <div className="flex justify-between">
          {options.map((option) => (
            <button
              key={option.name}
              onClick={() => setBookType(option.name)}
              className={`w-full p-2 cursor-pointer font-bold ${
                bookType === option.name
                  ? "text-[#87b2f1] bg-black"
                  : "text-white bg-slate-800"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
        <div className="text-white">
          {bookType === "Book A Flight" ? (
            <div className="text-white flex gap-3 flex-col p-6">
              <div className="flex gap-3">
                <input type="radio" /> Return
                <input type="radio" /> One Way
                <input type="radio" /> Multi City
              </div>
              <div className="bg-gray-700 p-3 border-2 border-gray-400 rounded flex gap-3 flex-wrap">
                <div className="flex gap-1 items-center">
                  <p>From</p>{" "}
                  <input type="text" className="bg-transparent border-b" />
                </div>
                <div className="flex gap-1 items-center">
                  <p>To</p>{" "}
                  <input type="text" className="bg-transparent border-b" />
                </div>
                <div>
                  Departure:{" "}
                  <input type="date" className="bg-transparent border-b" />
                </div>
                <div>
                  Return{" "}
                  <input type="date" className="bg-transparent border-b" />
                </div>
                <div>
                  Passengers{" "}
                  <input
                    type="number"
                    min={1}
                    className="bg-transparent border-b"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="text-[#87b2f1] font-semibold hover:border-[#87b2f1] hover:border-2 border-2 border-transparent rounded p-2 px-5 cursor-pointer">
                  + Add promo code
                </button>
                <button className="text-[#87b2f1] font-semibold hover:border-[#87b2f1] hover:border-2 border-2 border-transparent rounded p-2 px-5 cursor-pointer">
                  Search Flights
                </button>
              </div>
            </div>
          ) : (
            "Book A Layover"
          )}
        </div>
      </div>
    </div>
  );
}

export default Book