import React from "react";
import "../styles/circular-button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface CircularButtonProps {
  icon: IconDefinition;
  className?: string;
  onClick?: () => void;
}

const CircularButton: React.FC<CircularButtonProps> = ({
  icon,
  className,
  onClick,
}) => {
  return (
    <button className={`circular-button ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default CircularButton;
