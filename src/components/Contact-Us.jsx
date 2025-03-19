import React, { useState } from "react";
import Title from "./Title";

const ContactUs = () => {
  const [contactUs, setContactUs] = useState({ email: "", message: "" });

  return (
    <div
      id="contact"
      className="flex items-center justify-center gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8 flex-col"
    >
      <Title first="Contact" second="Us" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(contactUs);
        }}
        className="w-full p-6 rounded-lg flex flex-col gap-6 md:text-lg font-semibold max-w-[700px] shadow-lg"
      >
        <input
          type="email"
          value={contactUs.email}
          onChange={(e) =>
            setContactUs({ ...contactUs, email: e.target.value })
          }
          placeholder="Your Email Address"
          className="bg-transparent text-gray-400 p-4 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#87b2f1] transition duration-300 ease-in-out"
        />
        <textarea
          value={contactUs.message}
          onChange={(e) =>
            setContactUs({ ...contactUs, message: e.target.value })
          }
          className="h-[200px] p-4 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#87b2f1] transition duration-300 ease-in-out"
          placeholder="Write your message here..."
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#000020] hover:bg-[#0a0a13] active:bg-[#0a0a13] text-[#87b2f1] p-3 px-8 rounded-md transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
