import React from "react";
import Button from "./Button";
import "../styles/header.css";
import CircularButton from "./CircularButton";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <div className="header">
      <p className="logo">E-Commerce</p>
      <div className="buttons-container">
        <CircularButton icon={faCartShopping} className="cart" />
        <CircularButton icon={faHeart} className="saved" />
        <Button text="Login" />
      </div>
    </div>
  );
};

export default Header;
