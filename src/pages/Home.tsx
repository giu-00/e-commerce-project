import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Tag from "../components/Tag";
import "../styles/home.css";
import { getCategories } from "../services/getCategories";
import type { Category } from "../services/getCategories";
import Card from "../components/Card";
import { getProducts, type Product } from "../services/getProducts";

const Home: React.FC = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const categoryData = await getCategories();
        setCategory(categoryData);
      } catch (error) {
        console.error("Unable to get categories", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const productData = await getProducts();
        setProduct(productData);
      } catch (error) {
        console.error("Unable to get products", error);
      }
    };
    getData();
  }, []);

  const slicedCategories = category.slice(0, 5);

  return (
    <>
      <Header />
      <div className="tag-container">
        {slicedCategories.map((tag) => (
          <Tag label={tag.name} key={tag.id} className="home-tag" />
        ))}
      </div>
      <div className="card-container">
        {product.map((card) => (
          <Card
            images={card.images[0]}
            title={card.title}
            category={card.category.name}
            price={card.price}
            key={card.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
