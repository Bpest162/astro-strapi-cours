import type { IBlog } from "../types/blog";

const response = await fetch("http://127.0.0.1:1337/api/blogs?populate=*");
if (!response.ok) {
  throw new Error(`Error ${response.status}: ${response.statusText}`);
}

// Адаптация данных Strapi к ожидаемой структуре

const rawData = await response.json();
export const blogs = rawData.data.map((item: any) => ({
  id: item.id,
  title: item.title,
  content: item.content,
  metaTitle: item.metaTitle,
  metaDescription: item.metaDescription,
  createdAt: item.createdAt,
  image: item.image,
})) as IBlog[];