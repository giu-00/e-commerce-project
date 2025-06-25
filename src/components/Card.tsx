import React from "react";
import "../styles/card.css";
import Tag from "./Tag";
import CircularButton from "./CircularButton";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  images: string;
  title: string;
  category: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ images, title, category, price }) => {
  return (
    <div className="card">
      <img src={images} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <Tag label={category} className="card-tag" />
        <div className="card-buttons-price">
          <p className="card-price">{price}€</p>
          <div className="card-buttons">
            <CircularButton icon={faEye} className="view" />
            <CircularButton icon={faCartShopping} className="cart" />
            <CircularButton icon={faHeart} className="saved" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
