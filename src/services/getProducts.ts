import type { Category } from "./getCategories";

export interface Products {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export const getProducts = async (): Promise<Products[]> => {
  try {
    const response = await fetch("/data/products.json");
    if (!response.ok) throw new Error("Failed to fetch local products");
    return await response.json();
  } catch (error) {
    console.error("Can't load local products", error);
    throw error;
  }
};
