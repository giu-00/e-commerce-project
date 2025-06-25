import { apiRequest } from "./apiClient";
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

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await apiRequest<Product[]>("/products", "GET");
    return response;
  } catch (error) {
    console.error("Can't load products", error);
    throw error;
  }
};
