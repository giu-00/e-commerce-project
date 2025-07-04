import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import "../styles/detail-modal.css";
import { getProductById, type Product } from "../services/getProductById";
import { Galleria } from "primereact/galleria";

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
    <Dialog
      header={product?.title || "Dettagli prodotto"}
      visible={visible}
      onHide={onHide}
    >
      <div className="gallery-section">
        <Galleria
          value={galleryItems}
          responsiveOptions={responsiveOptions}
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
    </Dialog>
  );
};

export default DetailModal;
