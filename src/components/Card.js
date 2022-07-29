import React from "react";

const Card = ({ children, searchQuery }) => {
  return (
    <div className="bg-white mt-8 shadow-md rounded-2xl h-fit mb-3 text-slate-500 p-4">
      {children}
    </div>
  );
};

export default Card;
