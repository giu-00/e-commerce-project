import React, { useState } from "react";
import Button from "./Button";
import "../styles/header.css";
import CircularButton from "./CircularButton";
import {
  faBars,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div>
      <div className="header">
        <p className="logo">E-Commerce</p>
        <div className="buttons-container">
          <CircularButton icon={faCartShopping} className="cart" />
          <CircularButton icon={faHeart} className="saved" />
          <Button text="Login" />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          size="3x"
          className="burger"
          onClick={toggleBurger}
        />
      </div>
      {burger && (
        <div className="mobile-menu">
          <div className="mobile-menu-item" onClick={toggleBurger}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Carrello</span>
          </div>
          <div className="mobile-menu-item" onClick={toggleBurger}>
            <FontAwesomeIcon icon={faHeart} />
            <span>Preferiti</span>
          </div>
          <div className="mobile-menu-item" onClick={toggleBurger}>
            <Button text="Login" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
