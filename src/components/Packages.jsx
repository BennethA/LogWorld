/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import pack1 from "../assets/images/pack1.jpg";
import pack2 from "../assets/images/pack2.jpg";
import pack3 from "../assets/images/pack3.jpg";
import pack4 from "../assets/images/pack4.jpg";
import pack5 from "../assets/images/pack5.jpg";
import pack6 from "../assets/images/pack6.jpg";
import pack7 from "../assets/images/pack7.jpg";
import Title from "./Title";
import { AnimatePresence, motion } from "framer-motion";

// Modal Component
const Modal = ({ selectedPackage, onClose }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-white/10 backdrop-blur-lg flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white p-6 rounded-lg max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-[1px] right-2 text-2xl font-bold text-black"
        >
          &times;
        </button>
        <img
          src={selectedPackage.img}
          alt={selectedPackage.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{selectedPackage.title}</h2>
        <p className="text-gray-600">{selectedPackage.subtitle}</p>
        <p className="text-gray-600">Rating: {selectedPackage.rate}</p>
        <p className="text-lg font-bold mt-2 text-black">
          ${selectedPackage.price}{" "}
          <span className="text-sm text-gray-500">per person</span>
        </p>
        <p className="text-gray-500 mt-4">
          Explore this package in more detail. Enjoy an unforgettable experience
          in {selectedPackage.title}, including {selectedPackage.subtitle}. Get
          ready for a vacation filled with{" "}
          {selectedPackage.title.includes("Beach")
            ? "beautiful beaches"
            : "luxurious villas"}{" "}
          and much more!
        </p>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      img: pack1,
      title: "Villa Mabela",
      subtitle: "3 Days, 4 Nights",
      rate: "4.2",
      discount: "4,000",
      price: "3,330",
    },
    {
      img: pack2,
      title: "Maroc Beach",
      subtitle: "3 Days, 4 Nights",
      rate: "4.7",
      discount: "4,300",
      price: "3,230",
    },
    {
      img: pack3,
      title: "Villa Menoca",
      subtitle: "3 Days, 4 Nights",
      rate: "4.9",
      discount: "4,600",
      price: "3,030",
    },
    {
      img: pack4,
      title: "Santa Mabela",
      subtitle: "3 Days, 4 Nights",
      rate: "4.1",
      discount: "5,000",
      price: "4,330",
    },
    {
      img: pack5,
      title: "Madrid Gucho",
      subtitle: "3 Days, 4 Nights",
      rate: "4.2",
      discount: "3,000",
      price: "2,330",
    },
    {
      img: pack6,
      title: "Spaaane Villa",
      subtitle: "3 Days, 4 Nights",
      rate: "4.5",
      discount: "5,000",
      price: "4,330",
    },
    {
      img: pack7,
      title: "Sane Wealla",
      subtitle: "3 Days, 4 Nights",
      rate: "4.5",
      discount: "5,500",
      price: "4,000",
    },
  ];
    useEffect(() => {
      if (selectedPackage) {
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.style.overflow = "auto"; // Re-enable scrolling
      }
      // Clean up: Ensure scroll is re-enabled if component unmounts or models closes
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [selectedPackage]);


  return (
    <div
      id="packages"
      className="flex items-center justify-center flex-col gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8"
    >
      <Title
        first="All-Inclusive"
        second="Packages"
        description="Explore all-inclusive packages that turn your travel into a seamless
        adventure. Enjoy great deals on city tours, desert safaris, water sports, amusement parks, and wellness retreats all in one package."
      />
      <motion.div
        whileInView={{ opacity: 50, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="flex overflow-x-scroll gap-6 w-full p-1"
      >
        {packages.map((item, index) => (
          <div
            key={index}
            className="w-[200px] sm:w-[250px] md:w-[300px] hover:bg-[#000020] active:bg-[#000020] overflow-hidden flex-shrink-0 gap-5 p-2 shadow-xl rounded shadow-black flex flex-col"
          >
            <div className="flex items-center object-cover h-[150px] sm:h-[180px]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover h-full rounded hover:scale-95 active:scale-95 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between md:text-lg font-bold">
                <p>{item.title}</p>
                <p className="flex items-center gap-1">
                  <BsStarFill className="text-[#87b2f1]" /> {item.rate}
                </p>
              </div>
              <p className="text-gray-400">{item.subtitle}</p>
              <div className="flex items-center md:text-lg">
                <s className="text-gray-400 mr-2">${item.discount}</s>
                <p>
                  ${item.price}
                  <span className="text-sm text-gray-400"> per person</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedPackage(item)} // Set clicked package to the state
              className="text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] w-full p-3 rounded md:text-lg md:font-bold"
            >
              See Offer
            </button>
          </div>
        ))}
      </motion.div>

      {/* Modal: Only show when a package is selected */}
      {selectedPackage && (
        <Modal
          selectedPackage={selectedPackage}
          onClose={() => setSelectedPackage(null)} // Close modal
        />
      )}
    </div>
  );
};

export default Packages;
