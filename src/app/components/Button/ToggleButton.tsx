// "use client";

// import React from "react";

// const ToggleButton = ({ active, onClick, label }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 border ${
//         active ? "bg-[#E3F1FF] text-black" : "bg-transparent text-gray-700"
//       }`}
//       style={{
//         borderColor: active ? "#E3F1FF" : "gray",
//         boxShadow: active ? "0 0 0 2px #E3F1FF" : "none"
//       }}
//     >
//       {label}
//     </button>
//   );
// };

// export default ToggleButton;


"use client";

import React from "react";

interface ToggleButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  isLeft?: boolean; // Determines if the button is on the left
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  active,
  onClick,
  label,
  isLeft = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border xs:w-1/2 sm:w-1/2 md:w-1/2 text-[13px]  ${
        active ? "bg-[#DBE2F9] text-black" : "bg-transparent text-gray-700"
      } ${
        isLeft ? "rounded-l-full" : "rounded-r-full"
      }`}
      style={{
        borderColor: active ? "black" : "black",
        boxShadow: active ? "0 0 0 2px #E3F1FF" : "none"
      }}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
