import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Tag from "../components/Tag";
import "../styles/home.css";
import { getCategories } from "../services/getCategories";
import type { Category } from "../services/getCategories";

const Home: React.FC = () => {
  const [category, setCategory] = useState<Category[]>([]);

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

  return (
    <>
      <Header />
      <div className="tag-container">
        {category.map((tag) => (
          <Tag label={tag.name} key={tag.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
