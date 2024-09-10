// Button/Button.tsx

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled} 
    >
      {text}
    </button>
  );
};

export default Button;


// Button/Button.tsx

// import React from 'react';

// interface ButtonProps {
//   text: string;
//   onClick: () => void;
//   className?: string;
//   disabled?: boolean;
//   active?: boolean; // Added for handling button states
//   label?: string;   // Added for handling button labels
// }

// const Button: React.FC<ButtonProps> = ({
//   text = 'Default Text',   // Default value for text
//   onClick,
//   className = '',          // Default value for className
//   disabled = false,        // Default value for disabled
//   active = false,          // Default value for active
//   label = 'Button'         // Default value for label
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 rounded-full border ${
//         active ? "bg-[#E3F1FF] text-black" : "bg-transparent text-gray-700"
//       } ${className}`}
//       style={{
//         borderColor: active ? "#E3F1FF" : "gray",
//         boxShadow: active ? "0 0 0 2px #E3F1FF" : "none"
//       }}
//       disabled={disabled}
//     >
//       {label || text} {/* Display label if provided, otherwise display text */}
//     </button>
//   );
// };

// export default Button;
