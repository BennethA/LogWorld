import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const reachUs = [
    {
      link: "http://wa.me/0539540191",
      icon: <FaWhatsapp />,
    },
    {
      link: "http://www.twitter.com/dev_benneth",
      icon: <FaXTwitter />,
    },
    {
      link: "mailto:addobenneth6@gmail.com",
      icon: <BiLogoGmail />,
    },
  ];
  const aboutUs = [
    { link: "#about", title: "About" },
    { link: "#packages", title: "Packages" },
    { link: "#blogs", title: "Blogs" },
    { link: "#whyUs", title: "Why Us" },
  ];

  const locateUs = [
    {
      link: "https://www.google.com/maps/place/Pokuasi,+Ghana",
      name: "Pokuasi, Greater Accra, Ghana",
    },
    {
      link: "tel:0539540191",
      name: "0539540191",
    },
  ];
  return (
    <div className="flex flex-col gap-7 bg-[#000020] sm:px-[5%] p-3 lg:px-[13%]">
      <div className="flex items-start">
        <a
          href="#home"
          className="text-2xl font-bold flex items-center gap-2 text-[#87b2f1]"
        >
          <CiPlane className="-rotate-[30deg] text-2xl" /> LogWorld
        </a>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap gap-5 justify-between max-w-[600px]">
          <div>
            <h3 className="text-[#87b2f1] font-extrabold text-lg md:text-xl">
              About Us
            </h3>
            {aboutUs.map((about, index) => (
              <a
                href={about.link}
                key={index}
                className="text-gray-400 flex cursor-pointer hover:opacity-80 font-bold"
              >
                {about.title}
              </a>
            ))}
          </div>
          <div>
            <h3 className="text-[#87b2f1] font-extrabold text-lg md:text-xl">
              Locate Us
            </h3>
            {locateUs.map((locate, index) => (
              <a
                href={locate.link}
                key={index}
                className="text-gray-400 flex cursor-pointer hover:opacity-80 font-bold"
              >
                {locate.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#87b2f1] font-extrabold text-lg md:text-xl">
              Reach Us
            </h3>
            <div className="flex gap-2 flex-wrap cursor-pointer">
              {reachUs.map((reach, index) => (
                <a
                  href={reach.link}
                  key={index}
                  className="text-[#87b2f1] flex hover:opacity-80 text-[18px] rounded-full p-1 hover:bg-[#87b2f1] hover:text-white active:bg-[#87b2f1] active:text-white"
                >
                  {reach.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
