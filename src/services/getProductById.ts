import type { Category } from "./getCategories";

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export const getProductById = async (productId: number): Promise<Product> => {
  try {
    const response = await fetch("/data/products.json");

    if (!response.ok) {
      throw new Error("Failed to fetch local products");
    }

    const products: Product[] = await response.json();
    const product = products.find((p) => p.id === productId);

    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    console.error("Can't load product", error);
    throw error;
  }
};
