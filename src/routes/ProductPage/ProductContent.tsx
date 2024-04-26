import { useState } from "react";
import Button from "../../components/main/Subcategory/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Product } from "../../utils/types";
import ExtraInformation from "./ExtraInformation";
import MaterialsInfo from "./MaterialsInfo";
import SocialInfo from "./SocialInfo";

type ProductContentProps = {
  data: Product;
};

const ProductContent = ({ data }: ProductContentProps) => {
  if (!data) return null;
  const [buttonCartClicked, setButtonCartClicked] = useState<boolean>();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartSlice.cart);

  const addProductToCart = () => {
    console.log(data);
    dispatch({ type: "cart/cartData", payload: [...cart, data] });
    dispatch({ type: "cart/openCart", payload: true });
    window.scrollTo(1, 1);
    setButtonCartClicked(true);

    setTimeout(() => {
      dispatch({ type: "cart/openCart", payload: false });
      setButtonCartClicked(false);
    }, 3000);
  };

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
              ${data.priceWithDiscount}
            </p>
          </div>
        </div>
      </div>

      <Button
        onClick={addProductToCart}
        className="self-center"
        disabled={buttonCartClicked}
      >
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
