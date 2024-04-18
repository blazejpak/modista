export type Product = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export type Category = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export type SortType = {
  label: string;
  id: number;
};
