import type { IProduct } from "../types/product";

const response = await fetch("http://127.0.0.1:1337/api/products?populate=*");
if (!response.ok) {
  throw new Error(`Error ${response.status}: ${response.statusText}`);
}

// Адаптация данных Strapi к ожидаемой структуре

const rawData = await response.json();
export const products = rawData.data.map((item: any) => ({
  id: item.id,
  name: item.name,
  price: item.price,
  description: item.description,
  createdAt: item.createdAt,
  image: item.image,
})) as IProduct[];
