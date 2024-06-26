import { useParams } from "react-router-dom";

import { getProductById } from "../../utils/helpers";
import { useAppSelector } from "../../store/hooks";

import ImageSlider from "./ImageSlider";
import ProductContent from "./ProductContent";
import { Product } from "../../utils/types";

const ProductPage = () => {
  const productId: string = useParams().productId ?? "";

  const data = useAppSelector((state) => state.data.data);
  const product = getProductById(data, productId) as Product;
  if (!data || !productId || !product) return null;

  return (
    <section className="mt-20 flex flex-col lg:my-20 lg:flex-row  lg:px-[5%]">
      <ImageSlider images={product.images} alt={product.title} />
      <ProductContent data={product} />
    </section>
  );
};

export default ProductPage;
