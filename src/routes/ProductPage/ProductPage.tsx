import { useLoaderData } from "react-router-dom";
import { Product } from "../../utils/types";

import ImageSlider from "./ImageSlider";
import ProductContent from "./ProductContent";

const ProductPage = () => {
  const data = useLoaderData() as Product;

  if (!data) return null;

  return (
    <section className="mt-20 flex flex-col lg:my-20 lg:flex-row  lg:px-[5%]">
      <ImageSlider images={data.images} alt={data.title} />
      <ProductContent data={data} />
    </section>
  );
};

export default ProductPage;
