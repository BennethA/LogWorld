import React from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { CiPlane } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const aboutUs = [
    { link: "#about", title: "About" },
    { link: "#packages", title: "Services" },
    { link: "#blogs", title: "Company's Integrity" },
    { link: "#whyUs", title: "FAQ" },
  ];

  const contactUs = [
    "Pokuasi, Greater Accra, Ghana",
    "0539540191",
  ];

  const socials = [<FaFacebook />, <FaXTwitter />, <BsInstagram />, <BsYoutube />];
  return (
    <div className="flex flex-col gap-7 bg-black sm:px-[70px] p-3 lg:px-[15%]">
      <div className="text-2xl font-bold flex items-center gap-2 text-[#87b2f1]">
        <CiPlane className="-rotate-[30deg] text-2xl" /> LogWorld
      </div>
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <div>
          <h3 className="text-[#87b2f1] font-black">About Us</h3>
          {aboutUs.map((about, index) => (
            <a href={about.link}
              key={index}
              className="text-gray-500 flex cursor-pointer hover:opacity-80"
            >
              {about.title}
            </a>
          ))}
        </div>
        <div>
          <h3 className="text-[#87b2f1] font-black">Contact Us</h3>
          {contactUs.map((contact, index) => (
            <li
              key={index}
              className="text-gray-500 flex cursor-pointer hover:opacity-80"
            >
              {contact}
            </li>
          ))}
        </div>
        <div>
          <h3 className="text-[#87b2f1] font-black">Socials</h3>
          <div className="flex gap-2 flex-wrap cursor-pointer">
            {socials.map((social, index) => (
              <li key={index} className="text-[#87b2f1] flex hover:opacity-80">
                {social}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
