import React from "react";

const Title = ({ first, second, description }) => {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
        {first} <span className="text-[#87b2f1] italic">{second}</span>
      </h2>
      <p className="w-[80%] text-gray-600 font-semibold leading-[20px] text-lg md:text-xl">
        {description}
      </p>
    </div>
  );
};

export default Title;
