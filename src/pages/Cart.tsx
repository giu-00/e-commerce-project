import React, { useState } from "react";
import Button from "../components/Button";
import "../styles/cart.css";
import LoginModal from "../components/LoginModal";

const Cart: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <div className="cart-container">
        <h2>Login to start putting products to the cart!</h2>
        <Button text="Login" onClick={() => setShowLoginModal(true)} />
      </div>
      <LoginModal visible={showLoginModal} onHide={() => setShowLoginModal(false)} />
    </>
  );
};

export default Cart;
