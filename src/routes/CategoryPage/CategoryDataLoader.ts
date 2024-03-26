export const CategoryDataLoader = async () => {
  const data = await fetch("https://dummyjson.com/products/categories");

  const response = data.json();
  console.log(response);

  return response;
};
