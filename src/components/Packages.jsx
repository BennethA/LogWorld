import React from "react";
import { BsStarFill } from "react-icons/bs";
import pack1 from "../assets/images/pack1.jpg";
import pack2 from "../assets/images/pack2.jpg";
import pack3 from "../assets/images/pack3.jpg";
import pack4 from "../assets/images/pack4.jpg";
import pack5 from "../assets/images/pack5.jpg";
import pack6 from "../assets/images/pack6.jpg";
import pack7 from "../assets/images/pack7.jpg";
import Title from "./Title";

const Packages = () => {
  const packages = [
    {
      img: pack1,
      title: "Villa Mabela",
      subtitle: "3 Days 4 Nights",
      rate: "4.2",
      discount: "4,000",
      price: "3,330",
    },
    {
      img: pack2,
      title: "Maroc Beach",
      subtitle: "3 Days 4 Nights",
      rate: "4.7",
      discount: "4,300",
      price: "3,230",
    },
    {
      img: pack3,
      title: "Villa Menoca",
      subtitle: "3 Days 4 Nights",
      rate: "4.9",
      discount: "4,600",
      price: "3,030",
    },
    {
      img: pack4,
      title: "Santa Mabela",
      subtitle: "3 Days 4 Nights",
      rate: "4.1",
      discount: "5,000",
      price: "4,330",
    },
    {
      img: pack5,
      title: "Madrid Gucho",
      subtitle: "3 Days 4 Nights",
      rate: "4.2",
      discount: "3,000",
      price: "2,330",
    },
    {
      img: pack6,
      title: "Spaaane Villa",
      subtitle: "3 Days 4 Nights",
      rate: "4.5",
      discount: "5,000",
      price: "4,330",
    },

    {
      img: pack7,
      title: "Sane Wealla",
      subtitle: "3 Days 4 Nights",
      rate: "4.5",
      discount: "5,500",
      price: "4,000",
    },
  ];
  return (
    <div
      id="packages"
      className="flex items-center justify-center px-3 flex-col gap-5 sm:px-[100px] lg:px-[20%] pt-[60px] pb-5"
    >
      <Title
        first="All Inclusive"
        second="Packages"
        description="Explore all inclusive packages that turn your travel into a seemless
          adventure. Enjoy great deals on city tours, desert safaris, water
          sports, amusement parks and wellness retreats-all in one package."
      />
      <div className="flex overflow-x-scroll gap-6 w-full p-1">
        {packages.map((item, index) => (
          <div
            key={index}
            className="w-[200px] hover:bg-[#000020] active:bg-[#000020] overflow-hidden flex-shrink-0 gap-5 p-2 shadow-xl rounded shadow-black flex flex-col"
          >
            <div className="flex items-center object-cover h-[150px]">
              <img
                src={item.img}
                alt={item.img}
                className="w-full object-cover h-full rounded hover:scale-95 active:scale-95 tours"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between font-bold">
                <p className="text-lg">{item.title}</p>
                <p className="flex items-center gap-1">
                  <BsStarFill className="text-[#87b2f1]" /> {item.rate}
                </p>
              </div>
              <p className="text-gray-500 font-semibold">{item.subtitle}</p>
              <div className="flex">
                <s className="font-semibold text-gray-500 mr-2">
                  ${item.discount}
                </s>
                <p className="font-extrabold ">
                  ${item.price}
                  <span className="font-normal text-sm text-gray-500">
                    per person
                  </span>
                </p>
              </div>
            </div>
            <button className="bg-[#000020] hover:bg-[#0a0a13] active:bg-[#0a0a13] text-[#87b2f1] w-full py-2 rounded font-bold cursor-pointer text-lg">
              See Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
