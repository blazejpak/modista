import { URL } from "../../utils/helpers";

export const ProductPageLoader = async (product: string) => {
  const data = await fetch(`${URL}products/` + product);
  const response = data.json();
  return response;
};
