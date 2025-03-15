import React, { useState } from "react";
import Title from "./Title";

const Save = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex items-center justify-center px-3 flex-col gap-5 sm:px-[100px] lg:px-[20%] pt-[60px] bg-[#000020] pb-5">
      <Title
        first="Save"
        second="Time, "
        third="Save"
        fourth="Money"
        description="Sign up and receive exclusive deals."
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(email);
        }}
        className="bg-gray-50 w-full p-2 rounded flex justify-between gap-3 text-lg max-w-[600px]"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="bg-transparent text-gray-600 font-bold w-full px-2 py-2"
        />
        <button
          type="submit"
          className="bg-[#01012c] text-[#87b2f1] font-bold cursor-pointer px-3 rounded hover:bg-[#000020] active:bg-[#000020]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Save;
