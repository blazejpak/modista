export const ShoesLoader = async () => {
  const data = await fetch(
    "https://dummyjson.com/products/category/mens-shoes",
  );
  const response = await data.json();

  return response;
};
