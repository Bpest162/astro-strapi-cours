import axios from "axios";
import { BASE_URL, PRODUCTS_URL } from "../../constans/api";
import type { IProduct } from "../../types/product";

// Создаем экземпляр axios с базовой конфигурацией
const apiClient = axios.create({
  baseURL: BASE_URL, 
});

// Функция для получения данных о продуктах
export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    // Выполняем запрос к серверу
    const response = await apiClient.get(PRODUCTS_URL, { // products url 
      params: {
        populate: "*", //requests params 
      },
    });
    if (response.status !== 200) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    // Адаптация данных
    const rawData = response.data;
    return rawData.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      createdAt: item.createdAt,
      image: item.image, 
    }));

  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
};

export const fetchProductById = async (id: string) => { //получение продукта по ID 
    try {
      const response = await apiClient.get(`${PRODUCTS_URL}/${id}`/* , {
        params: { populate: "*" },
      } */);
  
      if (response.status !== 200) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
  
      const item = response.data.data;
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        createdAt: item.createdAt,
        image: item.image,
      };
    } catch (error) {
      console.error("Something went wrong:", error);
      throw error;
    }
  };
