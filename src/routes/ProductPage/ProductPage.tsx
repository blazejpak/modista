import { useLoaderData } from "react-router-dom";

const ProductPage = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>ProductPage</div>;
};

export default ProductPage;
