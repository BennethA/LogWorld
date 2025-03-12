import React from 'react'
import { BiAlarm } from 'react-icons/bi';

const Popular = () => {
  const tours = [
    {
      img: "src/assets/hotel1.jpg",
      title: "Sheraton",
      price: "3,700",
      days: "4 Days 5 Nights",
      persons: "4",
      reviews: "123",
    },
    {
      img: "src/assets/hotel2.jpg",
      title: "Hilton Beach",
      price: "2,700",
      days: "3 Days 4 Nights",
      persons: "2",
      reviews: "120",
    },
    {
      img: "src/assets/hotel3.jpg",
      title: "Levantine",
      price: "4,700",
      days: "5 Days 6 Nights",
      persons: "6",
      reviews: "220",
    },
    {
      img: "src/assets/hotel4.jpg",
      title: "Exquiree",
      price: "3,800",
      days: "4 Days 5 Nights",
      persons: "4",
      reviews: "153",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center p-3 sm:px-[100px] flex-col gap-5 pt-[70px]">
        <div className=" w-[70%] text-center flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-center">
            Popular <span className="text-[#87b2f1] italic">Tours</span>
          </h2>
          <p className=" text-gray-500 font-semibold text-sm leading-4">
            Duscover our popular all-in-one tour packages that makes your travel
            effortless! Enjoy amazing deals on city tours, thrilling safaries,
            exciting water sports and relaxing wellness retreats-all included!
          </p>
        </div>
        <div className="flex flex-col gap-1 w-full">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="flex justify-between items-center border cursor-pointer border-gray-300 rounded overflow-hidden gap-4 hover:bg-white flex-wrap bg-slate-200 p-2"
            >
              <div className="object-cover h-[180px] w-[180px]">
                <img
                  src={tour.img}
                  alt={tour.img}
                  className="w-full object-cover h-full rounded"
                />
              </div>
              <div className="flex flex-col gap-3">
                <button className="p-2 bg-blue-400 hover:opacity-80 rounded font-bold cursor-pointer">
                  High Rate
                </button>
                <h3 className="font-extrabold">{tour.title}</h3>
                <p className="font-bold">
                  ${tour.price}
                  <span className="font-normal text-gray-500 text-sm">
                    per person
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-500 font-bold">
                  <p className="flex items-center gap-1">
                    <BiAlarm />
                    {tour.days}
                  </p>
                  <p>{tour.persons} persons</p>
                </div>
                <div className="flex items-center gap-1 font-bold">
                  <p>{tour.reviews} </p>
                  <span className="font-bold text-sm text-gray-500">
                    reviews
                  </span>
                </div>
                <button className="p-2 hover:bg-black border-2 border-[#87b2f1] hover:border-transparent font-bold rounded text-[#87b2f1] w-full hover:opacity-80 cursor-pointer">
                  Book Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular