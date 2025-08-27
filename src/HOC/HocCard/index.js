import React from "react";

const HocCard = ({ children }) => {
  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      {children}
    </div>
  );
};

export default HocCard;
