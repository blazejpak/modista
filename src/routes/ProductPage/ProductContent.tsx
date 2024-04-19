import Button from "../../components/main/Subcategory/Button";
import { Product } from "../../utils/types";

type ProductContentProps = {
  data: Product;
};

const ProductContent = ({ data }: ProductContentProps) => {
  if (!data) return null;

  const discountPrice = (data.price * (100 - data.discountPercentage)) / 100;

  return (
    <div className="mx-[10%] flex flex-col gap-10 border-l border-r px-[10%] py-10 lg:mx-0 lg:w-[100%] lg:border-[0] lg:px-[5%]">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0 ">
        <strong className="text-xl md:text-3xl">{data.brand}</strong>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-xl font-bold md:text-2xl lg:text-left">
            {data.title}
          </h2>
          <div className="flex items-center gap-4">
            <p className="text-lg line-through">${data.price.toFixed(2)}</p>
            <p className="text-2xl font-bold text-red-500 ">
              ${discountPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <Button onClick={() => {}} style="self-center">
        Add to Cart
      </Button>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Description</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ProductContent;
