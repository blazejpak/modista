export const ShirtsLoader = async () => {
  const data = await fetch(
    "https://dummyjson.com/products/category/mens-shirts",
  );
  const response = await data.json();

  return response;
};
