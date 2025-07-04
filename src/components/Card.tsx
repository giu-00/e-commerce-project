import React, { useState } from "react";
import "../styles/card.css";
import Tag from "./Tag";
import CircularButton from "./CircularButton";
import {
  faCartPlus,
  faEye,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import DetailModal from "./DetailModal";

interface CardProps {
  id: number;
  images: string;
  title: string;
  category: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ id, images, title, category, price }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="product-card">
        <img src={images} alt={title} className="product-card-image" />
        <div className="product-card-body">
          <h3 className="product-card-title">{title}</h3>
          <Tag label={category} className="product-card-tag" />
          <div className="product-card-buttons-price">
            <p className="product-card-price">{price}€</p>
            <div className="product-card-buttons">
              <CircularButton
                icon={faEye}
                className="view"
                onClick={() => setShowModal(true)}
              />
              <CircularButton icon={faCartPlus} className="cart" />
              <CircularButton icon={faHeartCirclePlus} className="saved" />
            </div>
          </div>
        </div>
      </div>

      <DetailModal
        visible={showModal}
        onHide={() => setShowModal(false)}
        productId={id}
      />
    </>
  );
};

export default Card;
