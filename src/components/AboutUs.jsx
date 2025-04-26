/* eslint-disable no-unused-vars */
import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";

const AboutUs = ({ darkMode }) => {
  const aboutUs = [
    {
      title: "Our Mission",
      description:
        "Our mission is to empower businesses by providing innovative solutions that fuel growth and success. We are dedicated to delivering exceptional service and personalized support to our clients.",
    },
    {
      title: "Our Values",
      description:
        "We believe in the power of integrity, creativity, and collaboration. Our focus is on fostering a culture of innovation, excellence, and respect. We're committed to making a lasting positive impact on both our clients and the community.",
    },
    {
      title: "Our Team",
      description:
        "Our team is composed of passionate and skilled professionals who are experts in their respective fields. We work together to provide top-notch services and continually seek innovative ways to improve and exceed client expectations.",
    },
  ];

  return (
    <div
      id="about"
      className={`flex items-center justify-center px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8 flex-col gap-5`}
    >
      <Title
        darkMode={darkMode}
        first="About"
        second="Us"
        description="At our company, we are driven by a passion to help businesses thrive. Our expert team provides top-tier services that deliver tangible results and foster long-term success."
      />
      <div className="flex flex-wrap justify-center gap-4">
        {aboutUs.map((about, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 50, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className={`w-full sm:w-1/2 lg:w-1/3 mb-6 md:mb-0`}
          >
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 `}>
              {about.title}
            </h2>
            <p className={`leading-6`}>{about.description}</p>
          </motion.div>
        ))}
      </div>
      <a
        href="#contact"
        className="p-3 px-8 text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] rounded italic text-lg font-bold transition-all"
      >
        Contact Us
      </a>
    </div>
  );
};

export default AboutUs;
