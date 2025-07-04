export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch("/data/categories.json");
    if (!response.ok) throw new Error("Failed to fetch local categories");
    return await response.json();
  } catch (error) {
    console.error("Can't load local categories", error);
    throw error;
  }
};
