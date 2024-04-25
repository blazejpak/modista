import { useNavigate } from "react-router-dom";
import Button from "../../components/main/Subcategory/Button";
import { useAppSelector } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";
import { groupProductInCartByAmount } from "../../utils/helpers";
import { v4 as uuidv4 } from "uuid";
import { deliveryPrice } from "../../utils/variables";

const CartPage = () => {
  const navigate = useNavigate();

  const cart = useAppSelector((state) => state.cartSlice.cart);

  if (!cart) return null;
  const groupAmount = groupProductInCartByAmount(cart);

  const cartOrderValue = groupAmount.reduce((acc, product) => {
    acc += product.totalPrice;

    return acc;
  }, 0);

  const cartTotalPrice = cartOrderValue + deliveryPrice;

  const checkoutHandle = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <section className=" my-20 flex items-center justify-center md:px-[5%] lg:px-[10%]">
      <div className=" w-full max-w-[1140px]">
        <h2 className=" text-center text-3xl font-bold">Shopping bag</h2>
        <div className="flex flex-col md:mt-4 md:flex-row md:justify-between">
          <div className="mt-10 flex flex-col justify-center rounded bg-white">
            {groupAmount.length > 0 &&
              groupAmount.map((product) => {
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
                          <p>${product.totalPrice.toFixed(2)}</p>
                        </div>
                      </div>
                      <p></p>
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
