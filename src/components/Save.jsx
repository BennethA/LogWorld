import React, { useState } from "react";
import Title from "./Title";

const Save = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center flex-col justify-center gap-5 px-[5%] md:px-[7%] lg:px-[10%] pt-16 pb-8 bg-[#000020]">
      <Title
        first="Save"
        second="Time, "
        third="Save"
        fourth="Money"
        description="Sign up to receive exclusive deals and the latest updates."
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(email);
        }}
        className="bg-gray-50 w-full p-2 rounded flex justify-between gap-4 md:text-lg font-bold max-w-[600px] flex-col sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="bg-transparent text-gray-700 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#87b2f1] transition-all duration-300 ease-in-out"
        />
        <button
          type="submit"
          className="bg-[#01012c] text-[#87b2f1] p-3 px-8 rounded hover:bg-[#000020] active:bg-[#000020] transition-all duration-300 ease-in-out"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Save;
