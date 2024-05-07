<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Cart } from "../../utils/types";
import { ROUTES } from "../../utils/routes";
import { groupProductInCartByAmount } from "../../utils/helpers";

import DisplayProducts from "./DisplayProducts";
import SummaryCart from "./SummaryCart";
=======
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";

import DisplayProducts from "./DisplayProducts";
import SummaryCart from "./SummaryCart";
import { sendCartData } from "../../store/reducers/cartSlice";
import { Product } from "../../utils/types";
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

<<<<<<< HEAD
  const cart = useAppSelector((state) => state.cartSlice.cart);
  if (!cart) return null;
  const groupAmount = groupProductInCartByAmount(cart);
  const [finalData, setFinalData] = useState(groupAmount);

  useEffect(() => {
    setFinalData(groupAmount);
  }, [cart]);

  const addAmountOfProduct = (id: number) => {
    const product = finalData.map((item) => {
=======
  const cart = useAppSelector((state) => state.cart.cartData);

  const addAmountOfProduct = (id: number) => {
    const product = cart.map((item) => {
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
<<<<<<< HEAD
    setFinalData(product);
    dispatch({ type: "cart/cartData", payload: product });
  };

  const subtractAmountOfProduct = (id: number) => {
    const product = finalData
=======
    dispatch(sendCartData(product));
  };

  const subtractAmountOfProduct = (id: number) => {
    const product = cart
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
      .map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
<<<<<<< HEAD
      .filter((item) => item.amount > 0) as Cart[];

    setFinalData(product);
    dispatch({ type: "cart/cartData", payload: product });
=======
      .filter((item) => item.amount > 0) as Product[];

    dispatch(sendCartData(product));
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
    localStorage.setItem("cartData", JSON.stringify(product));
  };

  const checkoutHandle = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
<<<<<<< HEAD
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
=======
    <section className=" my-20 flex items-center md:px-[5%]  lg:justify-center lg:px-[10%] ">
      <div className=" w-full max-w-[1200px]">
        {cart.length > 0 ? (
          <>
            <h2 className=" text-center text-3xl font-bold">Shopping bag</h2>
            <div className="flex flex-col md:mt-4 md:flex-row md:justify-between">
              <DisplayProducts
                subtractAmountOfProduct={subtractAmountOfProduct}
                addAmountOfProduct={addAmountOfProduct}
              />
              <SummaryCart text="checkout" onClick={checkoutHandle} />
            </div>
          </>
        ) : (
          <p className="text-center text-xl font-bold">CART IS EMPTY</p>
        )}
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
      </div>
    </section>
  );
};

export default CartPage;
