import React from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  className = "",
  type = "button",
  icon,
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#ea580c] transition duration-300 ease-out border-2 border-[#ea580c] rounded-full shadow-md group";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ea580c] group-hover:translate-x-0 ease">
          <span className="transform transition-transform duration-300 group-hover:scale-110">
            {icon}
          </span>
        </span>
      }
      <span className="absolute flex items-center justify-center w-full h-full text-[#ea580c] transition-all duration-300 transform group-hover:translate-x-full ease">
        {text}
      </span>
      <span className="relative invisible">{text}</span>
    </button>
  );
};

export default CustomButton;
