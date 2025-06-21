import axios, { type AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: { "Content-Type": "application/json" },
});

export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient({
    url,
    method,
    data,
  });
  return response.data;
};
