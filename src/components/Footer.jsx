import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  

  const socials = [
    {
      link: "http://wa.me/0508529031",
      icon: <FaWhatsapp />,
    },
    {
      link: "http://www.twitter.com/dev_roi",
      icon: <FaXTwitter />,
    },
    {
      link: "mailto:addobenneth6@gmail.com",
      icon: <BiLogoGmail />,
    },
  ];
  const aboutUs = [
    { link: "#about", title: "About" },
    { link: "#packages", title: "Services" },
    { link: "#blogs", title: "Company's Integrity" },
    { link: "#whyUs", title: "FAQ" },
  ];

  const location = [
    "Pokuasi, Greater Accra, Ghana",
    "0539540191",
  ];
  return (
    <div className="flex flex-col gap-7 bg-black sm:px-[70px] p-3 lg:px-[15%]">
      <div className="text-2xl font-bold flex items-center gap-2 text-[#87b2f1]">
        <CiPlane className="-rotate-[30deg] text-2xl" /> LogWorld
      </div>
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <div>
          <h3 className="text-[#87b2f1] font-extrabold text-[17px]">
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
          <h3 className="text-[#87b2f1] font-extrabold text-[17px]">
            Locate Us
          </h3>
          {location.map((contact, index) => (
            <li
              key={index}
              className="text-gray-400 flex cursor-pointer hover:opacity-80 font-bold"
            >
              {contact}
            </li>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#87b2f1] font-extrabold text-[17px]">Socials</h3>
          <div className="flex gap-2 flex-wrap cursor-pointer">
            {socials.map((social, index) => (
              <a
                href={social.link}
                key={index}
                className="text-[#87b2f1] flex hover:opacity-80 text-[18px] rounded-full p-1 hover:bg-[#87b2f1] hover:text-white active:bg-[#87b2f1] active:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
