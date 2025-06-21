import { apiRequest } from "./apiClient";

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await apiRequest<Category[]>("/categories", "GET");
    return response;
  } catch (error) {
    console.error("Can't load categories", error);
    throw error;
  }
};
