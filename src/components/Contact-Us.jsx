/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import  emailjs from "@emailjs/browser";
const ContactUs = ({darkMode,
  userInfo,
  loggedIn,
  errors,
  setErrors,
  handleOpenLogin,
}) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      user_email: userInfo.email,
      message: message,
    };

    if(message === "") {
      return setErrors("Type a message!")
    } else {
      emailjs
        .send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          templateParams,
          "YOUR_PUBLIC_KEY"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Optionally clear the form or show a success message
        })
        .catch((err) => {
          setErrors("FAILED...");
          console.error("FAILED...", err);
          // Optionally show an error message
        });
    }
  };

  return (
    <div
      id="contact"
      className="flex items-center justify-center gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8 flex-col text-gray-500"
    >
      <Title darkMode={darkMode} first="Contact" second="Us" />
      <motion.form
        whileInView={{ opacity: 50, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        onSubmit={loggedIn ? handleSubmit : (event) => handleOpenLogin(event)}
        className="w-full p-6 rounded-lg flex flex-col gap-6 md:text-lg font-semibold max-w-[700px] shadow-lg"
      >
        <label htmlFor="contactEmail" className="sr-only">
          Email Address
        </label>
        <input
          id="contactEmail"
          type="email"
          aria-label="Email Address"
          value={userInfo.email}
          readOnly
          placeholder="Your Email Address"
          className="p-4 w-full rounded-md border-2 border-gray-300 outline-none"
        />
        <label htmlFor="text" className="sr-only">
          Message
        </label>
        <textarea
          id="text"
          type="text"
          aria-label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-[200px] p-4 w-full rounded-md border-2 border-gray-300 transition duration-300 ease-in-out outline-none"
          placeholder="Write your message here..."
        ></textarea>
        {errors && (
          <div className="bg-red-100 text-red-600 p-2 rounded-md">{errors}</div>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] p-3 px-8 rounded-md transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactUs;
