import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Product } from "../../utils/types";
<<<<<<< HEAD
import Button from "../../components/main/Subcategory/Button";
=======
import Button from "../../components/main/UI/Button";
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

import ExtraInformation from "./ExtraInformation";
import MaterialsInfo from "./MaterialsInfo";
import SocialInfo from "./SocialInfo";
import { sendCartData } from "../../store/reducers/cartSlice";

type ProductContentProps = {
  data: Product;
};

const ProductContent = ({ data }: ProductContentProps) => {
<<<<<<< HEAD
  if (!data) return null;
  const [buttonCartClicked, setButtonCartClicked] = useState<boolean>();
  const [addProductToCartMessage, setAddProductToCartMessage] =
    useState<string>("");

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartSlice.cart);
=======
  const [buttonCartClicked, setButtonCartClicked] = useState(false);
  const [addProductToCartMessage, setAddProductToCartMessage] = useState("");

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cartData);
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

  const addProductToCart = () => {
    setAddProductToCartMessage("Added to Cart");

<<<<<<< HEAD
    console.log(data);
    dispatch({ type: "cart/cartData", payload: [...cart, data] });
=======
    dispatch(sendCartData([...cart, data]));
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
    setButtonCartClicked(true);

    setTimeout(() => {
      setButtonCartClicked(false);
      setAddProductToCartMessage("");
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
              ${data.priceWithDiscount.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <Button
          onClick={addProductToCart}
          className="self-center"
          disabled={buttonCartClicked}
        >
          Add to Cart
        </Button>
<<<<<<< HEAD
        <p className="text-green-correct font-bold">
          {addProductToCartMessage}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Description</h2>
=======
        <p className="font-bold text-green-correct">
          {addProductToCartMessage}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className=" font-bold">Description</h2>
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
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
