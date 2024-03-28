export const SubcategoryLoader = async (category: string, param: string) => {
  let typeCategory = "";

  if (category === "men") typeCategory = "mens-";
  else if (category === "women") typeCategory = "womens-";
  else if (category === "accessories") typeCategory = "";

  const input = typeCategory + param;

  const data = await fetch("https://dummyjson.com/products/category/" + input);
  const response = data.json();
  return response;
};
