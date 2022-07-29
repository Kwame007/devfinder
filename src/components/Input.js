import React from "react";

const Input = ({ className, onChange, placeholder, value }) => {
  return (
    <div>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
