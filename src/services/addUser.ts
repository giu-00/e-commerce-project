import { apiRequest } from "./apiClient";

export interface User {
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
  id: number;
}
export type NewUser = {
  name: string;
  email: string;
  password: string;
  avatar?: string;
};

export const addUser = async (
  email: string,
  userData: NewUser
): Promise<User[]> => {
  try {
    const emailResponse = await apiRequest<{ isAvailable: boolean }>(
      "/users/is-available",
      "POST",
      {
        email,
      }
    );
    if (!emailResponse.isAvailable) {
      console.error("Email already in use");
      throw new Error("Email already in use");
    }
    const defaultAvatar = "https://picsum.photos/800";
    const payload: NewUser = {
      ...userData,
      avatar: userData.avatar || defaultAvatar,
    };
    const response = await apiRequest<User[]>("/users/", "POST", payload);
    return response;
  } catch (error: any) {
    if (error instanceof Error) {
      throw error;
    }
    const message = error?.response?.data?.message || "Can't add a new user";

    throw new Error(message);
  }
};
