export const WomenShoesLoader = async () => {
  const data = await fetch(
    "https://dummyjson.com/products/category/womens-shoes",
  );
  const response = await data.json();

  return response;
};
