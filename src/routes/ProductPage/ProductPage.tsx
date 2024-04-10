import { useLoaderData } from "react-router-dom";
import { Product } from "../../utils/types";

const ProductPage = () => {
  const data = useLoaderData() as Product;
  console.log(data);

  return <div>ProductPage</div>;
};

export default ProductPage;
