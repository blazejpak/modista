export const WatchesLoader = async () => {
  const data = await fetch(
    "https://dummyjson.com/products/category/mens-watches",
  );
  const response = await data.json();

  return response;
};
