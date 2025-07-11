import React from "react";
import Button from "../components/Button";
import "../styles/cart.css";

const Cart: React.FC = () => {
  return (
    <div className="cart-container">
      <h2>Login to start putting products to the cart!</h2>
      <Button text="Login" />
    </div>
  );
};

export default Cart;
