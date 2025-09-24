import React, { useEffect, useState } from "react";
import Tag from "../components/Tag";
import "../styles/home.css";
import { getCategories, type Category } from "../services/getCategories";
import { getProducts, type Products } from "../services/getProducts";
import Card from "../components/Card";
import { Paginator } from "primereact/paginator";

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);
  const [rowsOptions, setRowsOptions] = useState([3, 6, 9]);

  useEffect(() => {
    const updateRows = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setRows(5);
        setRowsOptions([5, 10, 15]);
      } else if (width <= 1100) {
        setRows(4);
        setRowsOptions([4, 8, 12]);
      } else {
        setRows(6);
        setRowsOptions([3, 6, 9]);
      }
    };

    updateRows(); // inizializza subito
    window.addEventListener("resize", updateRows);

    return () => window.removeEventListener("resize", updateRows);
  }, []);

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
        {products.slice(first, first + rows).map((item) => (
          <Card key={item.id} id={item.id} images={item.images[0]} title={item.title} category={item.category.name} price={item.price} />
        ))}

        <Paginator
          first={first}
          rows={rows}
          rowsPerPageOptions={rowsOptions}
          totalRecords={products.length}
          onPageChange={(e) => {
            setFirst(e.first);
            setRows(e.rows);
          }}
        />
      </div>
    </>
  );
};

export default Home;
