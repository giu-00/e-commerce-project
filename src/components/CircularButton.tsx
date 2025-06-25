import React from "react";
import "../styles/circular-button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface CircularButtonProps {
  icon: IconDefinition;
  className?: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({ icon, className }) => {
  return (
    <button className={`circular-button ${className}`}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default CircularButton;
