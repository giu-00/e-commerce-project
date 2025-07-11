import React from "react";
import Button from "../components/Button";

const Favourites: React.FC = () => {
  return (
    <div className="cart-container">
      <h2>Login to start putting products to the favourites!</h2>
      <Button text="Login" />
    </div>
  );
};

export default Favourites;
