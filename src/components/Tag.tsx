import React from "react";
import "../styles/tag.css";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return <div className={`tag tag-${label}`}>{label}</div>;
};

export default Tag;
