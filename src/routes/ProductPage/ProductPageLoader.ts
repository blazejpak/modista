import { URL } from "../../utils/helpers";

export const ProductPageLoader = async (category: string, param: string) => {
  let typeCategory = "";

  if (category === "men") typeCategory = "mens-";
  else if (category === "women") typeCategory = "womens-";
  else if (category === "accessories") typeCategory = "";

  const input = typeCategory + param;

  const data = await fetch(`${URL}products/category/` + input);
  const response = data.json();
  return response;
};
