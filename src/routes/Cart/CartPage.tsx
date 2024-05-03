import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Cart } from "../../utils/types";
import { ROUTES } from "../../utils/routes";
import { groupProductInCartByAmount } from "../../utils/helpers";

import DisplayProducts from "./DisplayProducts";
import SummaryCart from "./SummaryCart";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cartSlice.cart);
  if (!cart) return null;
  const groupAmount = groupProductInCartByAmount(cart);
  const [finalData, setFinalData] = useState(groupAmount);

  useEffect(() => {
    setFinalData(groupAmount);
  }, [cart]);

  const addAmountOfProduct = (id: number) => {
    const product = finalData.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setFinalData(product);
    dispatch({ type: "cart/cartData", payload: product });
  };

  const subtractAmountOfProduct = (id: number) => {
    const product = finalData
      .map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0) as Cart[];

    setFinalData(product);
    dispatch({ type: "cart/cartData", payload: product });
    localStorage.setItem("cartData", JSON.stringify(product));
  };

  const checkoutHandle = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <section className=" my-20 flex items-center justify-center md:px-[5%] lg:px-[10%]">
      <div className=" w-full max-w-[1140px]">
        <h2 className=" text-center text-3xl font-bold">Shopping bag</h2>
        <div className="flex flex-col md:mt-4 md:flex-row md:justify-between">
          {finalData.length > 0 ? (
            <>
              <DisplayProducts
                finalData={finalData}
                subtractAmountOfProduct={subtractAmountOfProduct}
                addAmountOfProduct={addAmountOfProduct}
              />
              <SummaryCart
                finalData={finalData}
                text="checkout"
                onClick={checkoutHandle}
              />
            </>
          ) : (
            <p className="mx-auto">CART IS EMPTY</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
