import React from "react";

const Title = ({ first, second, third, fourth, fifth, sixth, description }) => {
  return (
    <div className="flex flex-col items-center gap-3 w-[80%] text-center z-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold">
        {first} <span className="text-[#87b2f1] italic">{second}</span>
        {third} <span className="text-[#87b2f1] italic">{fourth}</span>
        {fifth} <span className="text-[#87b2f1] italic">{sixth}</span>
      </h1>
      <p className="w-[80%] text-gray-400 leading-[20px] md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Title;
