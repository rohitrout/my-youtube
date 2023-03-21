import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="border p-2 rounded-lg bg-gray-300 px-3">{name}</button>
    </div>
  );
};

export default Button;
