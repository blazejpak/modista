import { useLoaderData } from "react-router-dom";
import { Product } from "../../utils/types";

import ImageSlider from "./ImageSlider";

const ProductPage = () => {
  const data = useLoaderData() as Product;

  return (
    <section className="flex flex-col items-center px-[5%]">
      <ImageSlider images={data.images} />
    </section>
  );
};

export default ProductPage;
