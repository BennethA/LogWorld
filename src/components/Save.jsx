import React, { useState } from "react";

const Save = () => {
  const [email, setEmail] = useState("")
  return (
    <div className="flex items-center justify-center p-3 flex-col gap-5 sm:px-[100px] bg-white lg:px-[20%]">
      <div className=" w-[70%] text-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-center">
          Save <span className="text-[#87b2f1] italic">Time</span>, Save{" "}
          <span className="text-[#87b2f1] italic">Money</span>
        </h2>
        <p className=" text-gray-500 font-semibold text-sm leading-4">
          Sign up and receive exclusive deals
        </p>
      </div>
      <form onSubmit={(e) => {e.preventDefault(); console.log(email)}} className="bg-gray-50 w-full p-4 rounded flex justify-between gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="bg-transparent text-gray-500 font-bold w-full px-2"
        />
        <button type="submit" className="bg-black text-[#87b2f1] font-bold cursor-pointer p-3 rounded hover:opacity-80">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Save;
