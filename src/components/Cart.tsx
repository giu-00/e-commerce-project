import React from "react";
import "../styles/cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart: React.FC = () => {
  return (
    <button className="cart">
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
};

export default Cart;
