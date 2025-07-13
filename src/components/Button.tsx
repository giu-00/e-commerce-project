import React from "react";
import "../styles/button.css";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick, type }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
