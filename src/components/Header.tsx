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
import { NavLink } from "react-router";
import LoginModal from "./LoginModal";

const Header: React.FC = () => {
  const [burger, setBurger] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <>
      <div>
        <div className="header">
          <NavLink to={"/"} className="logo-link">
            <p className="logo">E-Commerce</p>
          </NavLink>
          <div className="buttons-container">
            <NavLink to={"cart"}>
              <CircularButton icon={faCartShopping} className="cart" />
            </NavLink>
            <NavLink to={"favourites"}>
              <CircularButton icon={faHeart} className="saved" />
            </NavLink>

            <Button text="Login" onClick={() => setShowLoginModal(true)} />
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
              <span>Cart</span>
            </div>

            <div className="mobile-menu-item" onClick={toggleBurger}>
              <FontAwesomeIcon icon={faHeart} />
              <span>Favourites</span>
            </div>
            <div className="mobile-menu-item" onClick={toggleBurger}>
              <Button text="Login" />
            </div>
          </div>
        )}
      </div>
      <LoginModal
        visible={showLoginModal}
        onHide={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default Header;
