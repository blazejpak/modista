export const WomenTopsLoader = async () => {
  const data = await fetch("https://dummyjson.com/products/category/tops");
  const response = await data.json();

  return response;
};
