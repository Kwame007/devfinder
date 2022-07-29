import React from "react";

const Button = ({ children, onClick, type, className }) => {
  return (
    <button onClick={onClick} type={type || "buttom"} className={className}>
      {children}
    </button>
  );
};

export default Button;
