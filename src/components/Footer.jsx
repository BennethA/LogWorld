/* eslint-disable no-unused-vars */
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";

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
    <div className="flex flex-col gap-5 px-[3%] md:px-[5%] lg:px-[8%] py-8">
      <motion.div
        whileInView={{ opacity: 10, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="flex items-start font-serif"
      >
        <a
          href="#home"
          className="flex font-extrabold text-[#87b2f1] text-xl md:text-2xl items-center font-serif relative overflow-hidden"
        >
          <CiPlane className="animate-smooth-move text-2xl md:text-3xl -rotate-[30deg]" />
          LogWorld
        </a>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 10, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <div className="flex flex-wrap gap-6 justify-between max-w-[800px] mx-auto">
          {/* About Us Section */}
          <div>
            <h2 className="text-[#87b2f1] font-extrabold text-lg md:text-xl">
              About Us
            </h2>
            {aboutUs.map((about, index) => (
              <a
                href={about.link}
                key={index}
                className="text-gray-500 flex cursor-pointer hover:text-[#87b2f1] md:text-lg font-medium"
              >
                {about.title}
              </a>
            ))}
          </div>

          {/* Locate Us Section */}
          <div>
            <h2 className="text-[#87b2f1] font-extrabold text-lg md:text-xl">
              Locate Us
            </h2>
            {locateUs.map((locate, index) => (
              <a
                href={locate.link}
                key={index}
                className="text-gray-500 flex cursor-pointer hover:text-[#87b2f1] md:text-lg font-medium"
              >
                {locate.name}
              </a>
            ))}
          </div>

          {/* Reach Us Section */}
          <div>
            <h2 className="text-[#87b2f1] font-extrabold text-lg md:text-xl">
              Reach Us
            </h2>
            <div className="flex gap-2 flex-wrap">
              {reachUs.map((reach, index) => (
                <a
                  href={reach.link}
                  aria-label={`Link to ${reach.link}`}
                  key={index}
                  className="hover:opacity-80 md:text-lg rounded-full p-2 text-gray-500 hover:text-white bg-gradient-to-r  hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] "
                >
                  {reach.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom Text (optional) */}
      <motion.div
        whileInView={{ opacity: 10, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-400 text-sm"
      >
        <p>© 2025 LogWorld. All Rights Reserved.</p>
        <p>Created by Benneth Addo.</p>
      </motion.div>
    </div>
  );
};

export default Footer;
