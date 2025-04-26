import "swiper/css";
import React from "react";
import Title from "./Title";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import tour1 from "../assets/images/tour1.jpg";
import tour2 from "../assets/images/tour2.jpg";
import tour3 from "../assets/images/tour3.jpg";
import tour4 from "../assets/images/tour4.jpg";
import tour5 from "../assets/images/tour5.jpg";
import tour6 from "../assets/images/tour6.jpg";
import tour7 from "../assets/images/tour7.jpg";
import tour8 from "../assets/images/tour8.jpg";
import tour9 from "../assets/images/tour9.jpg";
import tour10 from "../assets/images/tour10.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

const destinations = [
  { src: tour1, alt: "Beach Paradise" },
  { src: tour2, alt: "Mountain Retreat" },
  { src: tour3, alt: "Urban Adventure" },
  { src: tour4, alt: "Safari Journey" },
  { src: tour5, alt: "Desert Escape" },
  { src: tour6, alt: "Island Life" },
  { src: tour7, alt: "Winter Wonderland" },
  { src: tour8, alt: "Historic City" },
  { src: tour9, alt: "Tropical Getaway" },
  { src: tour10, alt: "Cultural Tour" },
];

const Destinations = ({ darkMode }) => {
  return (
    <section className="flex items-center justify-center gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8 flex-col">
      <Title
        darkMode={darkMode}
        first="Explore "
        second="Destinations"
        description="Discover beautiful places across the globe with curated experiences
          just for you."
      />

      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={16}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        className="w-full"
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={dest.src}
                alt={dest.alt}
                className="w-full h-[400px] object-cover group-hover:scale-150 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Destinations;
