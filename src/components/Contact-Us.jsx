import React, { useState } from "react";
import Title from "./Title";

const ContactUs = () => {
  const [contactUs, setContactUs] = useState({ email: "", message: "" });
  return (
    <div
      id="contact"
      className="flex items-center justify-center px-3 flex-col gap-5 sm:px-[100px] lg:px-[20%] pt-[60px] pb-5"
    >
      <Title first="Contact" second="Us" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(contactUs);
        }}
        className="w-full rounded flex items-center justify-between gap-3 flex-wrap md:text-lg font-bold max-w-[600px]"
      >
        <input
          type="email"
          value={contactUs.email}
          onChange={(e) =>
            setContactUs({ ...contactUs, email: e.target.value })
          }
          placeholder="Enter your email address"
          className="bg-transparent text-gray-300 p-4 w-full rounded border-2 border-gray-400"
        />
        <textarea
          name=""
          id=""
          value={contactUs.message}
          onChange={(e) =>
            setContactUs({ ...contactUs, message: e.target.value })
          }
          className="h-[200px] border-gray-300 border-2 p-4 w-full max-h-[200px] rounded"
          placeholder="Enter your message here"
        ></textarea>
        <div className="flex justify-end items-end w-full">
          <button
            type="submit"
            className="text-[#87b2f1] cursor-pointer p-3 rounded bg-[#000020] hover:bg-[#0a0a13] active:bg-[#0a0a13] md:font-bold md:text-lg"
          >
            Send Us A Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
