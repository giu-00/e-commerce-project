import React from "react";
import Button from "./Button";
import "../styles/header.css";
import Cart from "./Cart";

const Header: React.FC = () => {
  return (
    <div className="header">
      <p className="logo">E-Commerce</p>
      <div className="buttons-container">
        <Button text="Login" />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
