import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="flex items-center justify-center p-3 flex-col gap-5 sm:px-[100px] lg:px-[20%] pt-[70px]">
      <div className=" w-[70%] text-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-center">
          Contact <span className="text-[#87b2f1] italic">Us</span>
        </h2>
      </div>
      <div className="w-full rounded flex justify-between gap-3 flex-wrap">
        <input
          type="email"
          placeholder="Enter your email address"
          className="bg-transparent text-gray-500 font-bold p-4 w-full rounded border-2 border-gray-400"
        />
        <textarea
          name=""
          id=""
          className="h-[200px] border-gray-400 border-2 p-4 font-bold w-full rounded"
          placeholder="Enter your message here"
        ></textarea>
      </div>
      <div className="flex justify-end items-end w-full">

      <button className="bg-black text-[#87b2f1] font-bold cursor-pointer p-3 rounded hover:opacity-80">
        Send Us A Message
      </button>
      </div>
    </div>
  );
};

export default ContactUs;
