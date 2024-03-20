export const CategoryDataLoader = async (endpoint: string) => {
  const data = await fetch(
    "https://dummyjson.com/products/category/" + endpoint,
  );
  const response = await data.json();

  console.log("category", data);

  return response;
};
