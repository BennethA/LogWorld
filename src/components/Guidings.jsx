import React from "react";
import fishing from "../assets/images/fishing.jpg";
import mountain from "../assets/images/mountain.jpg";
import dessert from "../assets/images/dessert.jpg";
import jetski from "../assets/images/jetski.jpg";
import Title from "./Title";

const Guidings = () => {
  const guiding = [
    {
      img: mountain,
      title:
        "The true adventure of travelencomposses the thrill of Mountain Climbing",
      description:
        "Illo iure eveniet veritatis eius impedit laboriosam, doloremque voluptate",
      date: "June 3, 2025",
    },

    {
      img: dessert,
      title: "The ultimate adventure awaits with a thrilling desert safari.",
      description:
        "Sunt soluta corrupti, accusamus pariatur rerum debitis, consequuntur saepe numquam placeat voluptas iure.",
      date: "May 11, 2025",
    },
    {
      img: jetski,
      title:
        "Get ready for the ultimate thrill with an exhilarating jetski adventure on open water!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laborum?",
      date: "Mar 5, 2025",
    },
  ];
  return (
    <div
      id="blogs"
      className="flex items-center justify-center p-3 flex-col gap-5 sm:px-[100px] pt-[70px] lg:px-[20%]"
    >
      <div className="w-[70%] text-center">
        <Title
          first="Blogs & Travel"
          second="Guidings"
          description="
          The world is brimming with thrilling experiences and activities
          tailored for ecery type of traveler. Explore fantastic offers on urban
          excursions, desert excapades, acquatic adventures, theme parks, and
          rejuvenating wellfare getaways."
        />
      </div>
      <div className="flex flex-wrap gap-6 sm:justify-between justify-between">
        <div className="flex flex-col gap-4 md:w-[45%] pr-5">
          <img
            src={fishing}
            alt="fishing"
            className="rounded hover:scale-100 scale-95 active:scale-95 tours"
          />
          <div className="flex justify-between items-center">
            <h3 className="font-bold leading-4 text-lg md:text-xl lg:text-2xl">
              The real travel experience includes fishing.
            </h3>
            <p className="text-sm font-bold text-gray-500 md:text-lg lg:text-xl">
              March 5, 2025
            </p>
          </div>
          <p className="text-sm font-bold text-gray-500 md:text-lg leading-[18px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
            velit. A, provident harum! Nesciunt earum, natus excepturi similique
            facilis laboriosam.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-[45%] border-t-2 md:border-transparent border-gray-300 ">
          {guiding.map((guide, index) => (
            <div
              key={index}
              className="flex justify-between items-center cursor-pointer overflow-hidden gap-[5px]"
            >
              <div className="flex flex-col gap-2 w-[40%] font-bold">
                <h3 className="leading-[18px] text-lg md:text-xl lg:text-2xl">
                  {guide.title}
                </h3>
                <p className="text-gray-500 text-sm leading-[15px] md:text-lg">
                  {guide.description}
                </p>
                <p className="text-gray-500 text-sm">{guide.date}</p>
              </div>
              <div className="h-[180px] w-[60%] object-cover">
                <img
                  src={guide.img}
                  alt={guide.img}
                  className="w-full object-cover h-full rounded hover:scale-95 active:scale-95 tours"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guidings;
