import React from "react";
import "../styles/tag.css";

interface TagProps {
  label: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ label, className }) => {
  return <div className={`tag tag-${label} ${className}`}>{label}</div>;
};

export default Tag;
