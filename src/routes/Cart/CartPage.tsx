import { useNavigate } from "react-router-dom";
import Button from "../../components/main/Subcategory/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";
import { groupProductInCartByAmount } from "../../utils/helpers";
import { v4 as uuidv4 } from "uuid";
import { deliveryPrice } from "../../utils/variables";
import { useState } from "react";
import { Cart } from "../../utils/types";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cartSlice.cart);

  if (!cart) return null;

  console.log(cart);

  const groupAmount = groupProductInCartByAmount(cart);
  console.log(groupAmount);

  const cartData: Cart[] = Object.values(groupAmount);

  const [finalData, setFinalData] = useState(cartData);

  const checkoutHandle = () => {
    navigate(ROUTES.CHECKOUT);
  };

  const cartOrderValue = finalData.reduce((acc, product) => {
    acc += product.price * product.amount;

    return acc;
  }, 0);

  console.log(cartOrderValue);
  const cartTotalPrice = cartOrderValue + deliveryPrice;

  const addAmountOfProduct = (id: number) => {
    const product = finalData.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    dispatch({ type: "cart/cartData", payload: product });
    setFinalData(product);
  };

  const subtractAmountOfProduct = (id: number) => {
    const product = finalData
      .map((item) => {
        if (item.id === id) {
          if (item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          } else return null;
        }
        return item;
      })
      .filter((item) => item !== null) as Cart[];

    dispatch({ type: "cart/cartData", payload: product });
    setFinalData(product);
  };

  return (
    <section className=" my-20 flex items-center justify-center md:px-[5%] lg:px-[10%]">
      <div className=" w-full max-w-[1140px]">
        <h2 className=" text-center text-3xl font-bold">Shopping bag</h2>
        <div className="flex flex-col md:mt-4 md:flex-row md:justify-between">
          <div className="mt-10 flex flex-col justify-center rounded bg-white">
            {finalData.length > 0 &&
              finalData.map((product) => {
                const id = uuidv4();

                return (
                  <div
                    className="flex   w-full flex-col items-center  gap-8 rounded  p-8 xs:flex-row md:max-w-[500px] md:p-2"
                    key={id}
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      height={160}
                      className="h-48 w-48"
                    />
                    <div className="flex flex-col  gap-6 text-xs">
                      <div className="text-base">
                        <p className="font-bold first-letter:uppercase">
                          {product.title}
                        </p>
                        <p>${product.price.toFixed(2)}</p>
                      </div>
                      <div className="flex gap-2 font-normal">
                        <div>
                          <p>Quantiity:</p>
                          <p>Rating:</p>
                          <p>Total:</p>
                        </div>
                        <div>
                          <p>{product.amount}</p>
                          <p>{product.rating}</p>
                          <p>${(product.price * product.amount).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button
                          onClick={() => subtractAmountOfProduct(product.id)}
                          className="max-w-[40px]"
                        >
                          -
                        </Button>
                        <p className="text-lg ">{product.amount}</p>
                        <Button
                          className="max-w-[40px]"
                          onClick={() => addAmountOfProduct(product.id)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex w-full flex-col gap-8 rounded bg-white p-8 shadow-sm md:mt-10 md:h-fit md:max-w-[300px] ">
            <div>
              <div className="flex justify-between">
                <p>Order value</p>
                <p>${cartOrderValue.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery</p>
                <p>${deliveryPrice}</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>${cartTotalPrice.toFixed(2)}</p>
              </div>
            </div>

            <Button onClick={checkoutHandle} className="self-center">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
