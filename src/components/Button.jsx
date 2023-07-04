import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="">
      <span>{text}</span>
    </button>
  );
};

export default Button;
