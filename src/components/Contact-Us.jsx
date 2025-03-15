import React, { useState } from "react";
import Title from "./Title";

const ContactUs = () => {
  const [contactUs, setContactUs] = useState({ email: "", message: "" });
  return (
    <div
      id="contact"
      className="flex items-center justify-center p-3 flex-col gap-5 sm:px-[100px] lg:px-[20%] pt-[70px]"
    >
      <div className=" w-[70%] text-center flex flex-col gap-5">
        <Title first="Contact" second="Us" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(contactUs);
        }}
        className="w-full rounded flex justify-between gap-3 flex-wrap"
      >
        <input
          type="email"
          value={contactUs.email}
          onChange={(e) =>
            setContactUs({ ...contactUs, email: e.target.value })
          }
          placeholder="Enter your email address"
          className="bg-transparent text-gray-500 font-bold p-4 w-full rounded border-2 border-gray-400"
        />
        <textarea
          name=""
          id=""
          value={contactUs.message}
          onChange={(e) =>
            setContactUs({ ...contactUs, message: e.target.value })
          }
          className="h-[200px] border-gray-400 border-2 p-4 font-bold w-full max-h-[200px] rounded"
          placeholder="Enter your message here"
        ></textarea>
        <div className="flex justify-end items-end w-full">
          <button
            type="submit"
            className="bg-black text-[#87b2f1] font-bold cursor-pointer p-3 rounded hover:opacity-80"
          >
            Send Us A Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
