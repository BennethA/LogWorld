import React from "react";

const Title = ({ first, second }) => {
  return (
    <h2 className="text-3xl text-center font-bold">
      {first} <span className="text-[#87b2f1] italic">{second}</span>
    </h2>
  );
};

export default Title;
