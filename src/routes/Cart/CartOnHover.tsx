import { PiShoppingCart } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { groupProductInCartByAmount } from "../../utils/helpers";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/main/Subcategory/Button";
import { Cart } from "../../utils/types";

const CartOnHover = () => {
  const cart = useAppSelector((state) => state.cartSlice.cart);
  const isCartOpen = useAppSelector((state) => state.cartSlice.isOpenCart);
  const dispatch = useAppDispatch();

  if (!cart) return null;

  const groupAmount = groupProductInCartByAmount(cart);
  const cartData: Cart[] = Object.values(groupAmount);

  const navigate = useNavigate();

  const cartHandle = () => {
    navigate(ROUTES.CART);
  };

  const checkoutHandle = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <div
      className=" group relative h-full content-center"
      onMouseEnter={() => dispatch({ type: "cart/openCart", payload: true })}
      onMouseLeave={() => dispatch({ type: "cart/openCart", payload: false })}
    >
      <div
        className="hover-link flex cursor-pointer items-center  justify-center  gap-1 transition-all active:scale-110"
        onClick={cartHandle}
      >
        <PiShoppingCart size={24} />
        <p className="text-sm font-light">Cart</p>
        <p className=" text-xs font-light ">({cartData.length})</p>
      </div>

      {isCartOpen && (
        <div className="absolute right-[-100%] top-[100%] flex   w-[360px] flex-col   rounded bg-white p-4 text-black-normal shadow-xl">
          <div className="max-h-[250px] overflow-y-auto">
            {cartData.length > 0 ? (
              cartData.map((product) => {
                const id = uuidv4();
                return (
                  <div
                    className="flex  items-center justify-between gap-4 p-8"
                    key={id}
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-24 w-[50%] shadow"
                    />

                    <div className="flex w-[50%]  flex-col gap-2 text-xs">
                      <div>
                        <p>{product.title}</p>
                        <div className="flex items-center gap-2">
                          <p className="line-through">
                            ${product.price.toFixed(2)}
                          </p>
                          <p className="font-bold text-red-500 ">
                            ${product.priceWithDiscount}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 font-normal">
                        <div>
                          <p>Quantiity:</p>
                          <p>Rating:</p>
                        </div>
                        <div>
                          <p>{product.amount}</p>
                          <p>{product.rating}</p>
                        </div>
                      </div>
                      <p></p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center">Cart is empty.</p>
            )}
          </div>
          {cart.length > 0 && (
            <div className="flex flex-col gap-2 p-4">
              <Button onClick={checkoutHandle}>Checkout</Button>
              <Button onClick={cartHandle}>Shopping bag</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartOnHover;
