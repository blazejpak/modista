export const WatchesLaoder = async () => {
  const data = await fetch(
    "https://dummyjson.com/products/category/womens-watches",
  );
  const response = await data.json();

  return response;
};
