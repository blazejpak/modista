import Button from "../../components/main/Subcategory/Button";
import { Product } from "../../utils/types";
import ExtraInformation from "./ExtraInformation";
import MaterialsInfo from "./MaterialsInfo";
import SocialInfo from "./SocialInfo";

type ProductContentProps = {
  data: Product;
};

const ProductContent = ({ data }: ProductContentProps) => {
  if (!data) return null;

  const discountPrice = (data.price * (100 - data.discountPercentage)) / 100;

  return (
    <div
      className={`flex flex-col gap-10 px-[10%] py-10 lg:mx-0  lg:w-[50%] lg:px-[5%]  lg:pb-10 lg:pt-0 `}
    >
      <div className="flex flex-col items-center justify-between gap-1 ">
        <h1 className="text-2xl font-bold md:text-3xl">{data.brand}</h1>

        <div className="flex flex-col items-center gap-16">
          <p className="text-center text-base opacity-45 md:text-2xl lg:text-left">
            {data.title}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-lg line-through">${data.price.toFixed(2)}</p>
            <p className="text-2xl font-bold text-red-500 ">
              ${discountPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <Button onClick={() => {}} className="self-center">
        Add to Cart
      </Button>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Description</h2>
        <p>{data.description}</p>
      </div>

      <ExtraInformation />
      <div>
        <MaterialsInfo label="Materials" />
        <MaterialsInfo label="Care Guide" />
      </div>
      <SocialInfo />
    </div>
  );
};

export default ProductContent;
