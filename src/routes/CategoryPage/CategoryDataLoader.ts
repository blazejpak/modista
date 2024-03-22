export const CategoryDataLoader = async (param: string) => {
  const data = await fetch("https://dummyjson.com/products/category/" + param);

  const response = data.json();

  return response;
};
