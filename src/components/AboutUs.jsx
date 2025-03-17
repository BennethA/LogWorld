import React from "react";
import Title from "./Title";

const AboutUs = () => {
  const aboutUs = [
    {
      title: "Our Mission",
      description:
        "Our mission is to provide innovative solutions that help businesses grow and thrive. We're committed to delivering exceptional service and support to our clients.",
    },
    {
      title: "Our Values",
      description:
        "We value integrity, creativity, and teamwork. We believe in fostering a culture of innovation and excellence, and we're dedicated to making a positive impact on our clients and our community.",
    },
    {
      title: "Our Team",
      description:
        "Our team is comprised of experienced professionals who are passionate about what they do. We're dedicated to providing exceptional service and support to our clients, and we're always looking for new ways to improve and grow.",
    },
  ];
  return (
    <div
      id="about"
      className="flex items-center justify-center px-3 flex-col gap-5 sm:px-[100px] lg:px-[20%] pt-[60px] bg-[#000020] pb-5"
    >
      <Title
        first="About"
        second="Us"
        description="At our company, we're passionate about helping businesses succeed. Our
        team of experts has years of experience in providing top-notch services
        that drive results."
      />

      <div className="flex flex-wrap justify-center">
        {aboutUs.map((about, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2">{about.title}</h2>
            <p className="text-gray-400 md:font-bold leading-[20px]">{about.description}</p>
          </div>
        ))}
      </div>
      <a
        href="#contact"
        className="p-3 px-8 bg-[#01012c] hover:bg-[#0a0a13] active:bg-[#0a0a13] rounded text-[#87b2f1] italic md:text-lg md:font-bold"
      >
        Contact Us
      </a>
    </div>
  );
};

export default AboutUs;
