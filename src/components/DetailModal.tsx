import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import "../styles/detail-modal.css";
import { getProductById, type Product } from "../services/getProductById";
import { Galleria } from "primereact/galleria";
import Tag from "./Tag";
import Button from "./Button";
import CircularButton from "./CircularButton";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

interface DetailModalProps {
  visible: boolean;
  onHide: () => void;
  productId: number;
}

const DetailModal: React.FC<DetailModalProps> = ({
  visible,
  onHide,
  productId,
}) => {
  const [product, setProduct] = useState<Product | null>(null);

  const [quantity, setQuantity] = useState(0);

  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    if (!visible) return;

    const fetchData = async () => {
      try {
        const productData = await getProductById(productId);
        setProduct(productData);
      } catch (error) {
        console.error("Unable to fetch product", error);
      }
    };

    fetchData();
  }, [productId, visible]);

  const galleryItems =
    product?.images.map((url) => ({
      original: url,
      thumbnail: url,
    })) || [];

  return (
    <Dialog visible={visible} onHide={onHide} dismissableMask draggable={false}>
      <div className="dialog-content">
        <div className="gallery-section">
          <Galleria
            value={galleryItems}
            responsiveOptions={responsiveOptions}
            circular
            item={(item) => (
              <img
                src={item.original}
                alt="Product"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            )}
            thumbnail={(item) => (
              <img
                src={item.thumbnail}
                alt="Thumbnail"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            )}
            showThumbnails={true}
            showIndicators={false}
            showItemNavigators={true}
            showThumbnailNavigators={false}
          />
        </div>
        <div className="info-container">
          <div className="title-group">
            <h1 className="product-title">{product?.title}</h1>
            {product?.category && <Tag label={product.category.name} />}
            <p className="product-description">{product?.description}</p>
          </div>

          <div className="product-buttons">
            <h2 className="product-price">{product?.price}€</h2>
            <div className="quantity">
              <button
                className="button-minus"
                onClick={() => {
                  if (quantity != 0) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>
              <p className="quantity-number">{quantity}</p>

              <button
                className="button-plus"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <NavLink to={"/cart"} className="cart-link">
              <Button text="Add to Cart" className="add-to-cart" />
            </NavLink>
            <NavLink to={"/favourites"}>
              <CircularButton icon={faHeartCirclePlus} className="saved" />
            </NavLink>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DetailModal;
