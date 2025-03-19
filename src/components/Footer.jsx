import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

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
    {
      icon: <IoCall />,
      link: "tel:0539540191",
    },
  ];
  const aboutUs = [
    { link: "#about", title: "About" },
    { link: "#packages", title: "Tour Packages" },
    { link: "#blogs", title: "Blogs" },
    { link: "#whyUs", title: "Why Choose Us" },
  ];

  const locateUs = [
    {
      link: "https://www.google.com/maps/place/Pokuasi,+Ghana",
      name: "Pokuasi, Greater Accra, Ghana",
    },
  ];

  return (
    <div className="flex flex-col gap-5 bg-[#000020] px-[4%] md:px-[6%] lg:px-[9%] py-8">
      <div className="flex items-start">
        <a
          href="#home"
          className="flex font-extrabold text-[#87b2f1] text-xl md:text-2xl items-center"
        >
          <CiPlane className="-rotate-[30deg] text-2xl md:text-3xl" /> LogWorld
        </a>
      </div>

      <div className="w-full">
        <div className="flex flex-wrap gap-6 justify-between max-w-[800px] mx-auto">
          {/* About Us Section */}
          <div>
            <h3 className="text-[#87b2f1] font-extrabold text-lg md:text-xl">
              About Us
            </h3>
            {aboutUs.map((about, index) => (
              <a
                href={about.link}
                key={index}
                className="text-gray-400 flex cursor-pointer hover:text-[#87b2f1] md:text-lg font-medium"
              >
                {about.title}
              </a>
            ))}
          </div>

          {/* Locate Us Section */}
          <div>
            <h3 className="text-[#87b2f1] font-extrabold text-lg md:text-xl">
              Locate Us
            </h3>
            {locateUs.map((locate, index) => (
              <a
                href={locate.link}
                key={index}
                className="text-gray-400 flex cursor-pointer hover:text-[#87b2f1] md:text-lg font-medium"
              >
                {locate.name}
              </a>
            ))}
          </div>

          {/* Reach Us Section */}
          <div>
            <h3 className="text-[#87b2f1] font-extrabold text-lg md:text-xl">
              Reach Us
            </h3>
            <div className="flex gap-2 flex-wrap">
              {reachUs.map((reach, index) => (
                <a
                  href={reach.link}
                  key={index}
                  className="text-[#87b2f1] hover:opacity-80 md:text-lg rounded-full p-2 hover:bg-[#87b2f1] hover:text-white active:bg-[#87b2f1] active:text-white"
                >
                  {reach.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text (optional) */}
      <div className="text-center text-gray-400 text-sm">
        <p>© 2025 LogWorld. All Rights Reserved.</p>
        <p>Created by Benneth Addo.</p>
      </div>
    </div>
  );
};

export default Footer;
