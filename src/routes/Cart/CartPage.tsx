import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";

import DisplayProducts from "./DisplayProducts";
import SummaryCart from "./SummaryCart";
import { sendCartData } from "../../store/reducers/cartSlice";
import { Product } from "../../utils/types";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.cartData);

  const addAmountOfProduct = (id: number) => {
    const product = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    dispatch(sendCartData(product));
  };

  const subtractAmountOfProduct = (id: number) => {
    const product = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0) as Product[];

    dispatch(sendCartData(product));
    localStorage.setItem("cartData", JSON.stringify(product));
  };

  const checkoutHandle = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
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
      </div>
    </section>
  );
};

export default CartPage;
