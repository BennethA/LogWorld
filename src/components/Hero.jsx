import React from 'react'
import airbnb from "../assets/images/airbnb.png"
import qatar from "../assets/images/qatar.png"
import bookings from "../assets/images/bookings.png"
import visa from "../assets/images/visa.png";

const Hero = () => {
  const sponsors = [airbnb, qatar, bookings, visa];
  return (
    <div
      id="home"
      className="pt-[100px] flex items-center justify-center text-center flex-col gap-5 sm:px-6 p-3 lg:px-[20%]"
    >
      <p className="text-4xl w-[75%] leading-[40px] font-extrabold">
        Book your <span className="text-[#87b2f1] italic">Dream Trips</span>,
        Explore the <span className="text-[#87b2f1] italic">World</span>,
        Discover new <span className="text-[#87b2f1] italic">Adventures</span>!
      </p>
      <p className="w-[73%] text-gray-500 font-semibold leading-4">
        We create unforgettable experience that transport you to breathtaking
        locations where you can build meaningful connections with others and
        gather stories that you will trasure for a lifetime. Each journey is
        designed to immerse you in the beauty of the world!
      </p>
      <button className="bg-black hover:opacity-80 rounded p-3 px-8 text-[#87b2f1] italic font-bold cursor-pointer">
        Book A Trip
      </button>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {sponsors.map((sponsor, index) => (
          <img
            className="max-w-[130px] hover:opacity-80 cursor-pointer"
            key={index}
            src={sponsor}
            alt={sponsor}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero