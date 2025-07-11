import React, { useEffect, useState } from "react";
import Tag from "../components/Tag";
import "../styles/home.css";
import { getCategories, type Category } from "../services/getCategories";
import { getProducts, type Products } from "../services/getProducts";
import Card from "../components/Card";

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await getCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error("Unable to get categories", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getProducts();
        setProducts(productData);
      } catch (error) {
        console.error("Unable to get products", error);
      }
    };

    fetchProducts();
  }, []);

  const slicedCategories = categories.slice(0, 5);

  return (
    <>
      <div className="tag-container">
        {slicedCategories.map((tag) => (
          <Tag label={tag.name} key={tag.id} className="home-tag" />
        ))}
      </div>
      <div className="card-container">
        {products.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            images={card.images[0]}
            title={card.title}
            category={card.category.name}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
