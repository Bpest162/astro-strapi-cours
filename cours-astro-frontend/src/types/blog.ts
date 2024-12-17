export interface IBlog {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  metaTitle: string;
  metaDescription: string;
  image: [
    {
      url: string;
    }
  ];
}
