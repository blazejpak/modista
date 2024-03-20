export const WomenDressesLoader = async () => {
  const data = await fetch(
    "https://dummyjson.com/products/category/womens-dresses",
  );
  const response = await data.json();

  return response;
};
