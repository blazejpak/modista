import { PiShoppingCart } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/main/UI/Button";
import { openCart } from "../../store/reducers/cartSlice";
import {
  cartOrderValue,
  cartTotalPrice,
  deliveryPrice,
} from "../../utils/variables";

const CartOnHover = () => {
  const cart = useAppSelector((state) => state.cart.cartData);
  const isCartOpen = useAppSelector((state) => state.cart.isOpenCart);
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const cartHandle = () => {
    navigate(ROUTES.CART);
  };
  const checkoutHandle = () => {
    navigate(ROUTES.CHECKOUT);
  };

  const orderValue = cartOrderValue(cart);
  const totalPrice = cartTotalPrice(orderValue);

  return (
    <div
      className=" group relative h-[90px] content-center"
      onMouseEnter={() => dispatch(openCart(true))}
      onMouseLeave={() => dispatch(openCart(false))}
    >
      <button
        className="hover-link flex cursor-pointer items-center  justify-center  gap-1 transition-all active:scale-110"
        onClick={cartHandle}
      >
        <PiShoppingCart size={24} />
        <p className="text-sm font-light">Cart</p>
        <p className=" text-xs font-light ">({cart.length})</p>
      </button>
      {isCartOpen && pathname !== "/cart" && pathname !== "/checkout" && (
        <div className="absolute right-[-30%] top-[100%] flex h-fit  w-[360px] flex-col gap-8 rounded bg-white p-4 text-black-normal shadow-xl">
          {cart.length > 0 ? (
            <>
              <div className="max-h-[250px] overflow-y-auto">
                {cart.map((product) => {
                  const id = uuidv4();
                  const totalPriceOfProduct =
                    product.priceWithDiscount * product.amount;
                  return (
                    <div
                      className="flex items-center justify-center gap-4 p-8"
                      key={id}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-24 w-24 object-contain "
                      />
                      <div className="flex flex-col  gap-2 text-xs">
                        <div>
                          <p>{product.title}</p>
                          <p>${product.priceWithDiscount.toFixed(2)}</p>
                        </div>
                        <div className="flex gap-2 font-normal">
                          <div>
                            <p>Quantiity:</p>
                            <p>Rating:</p>
                            <p>Total:</p>
                          </div>
                          <div>
                            <p>{product.amount}</p>
                            <p>{product.rating}</p>$
                            {totalPriceOfProduct.toFixed(2)}
                          </div>
                        </div>
                        <p></p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-black-lighter/25 py-4 text-base font-normal">
                <div className="flex justify-between">
                  <p>Order value</p>
                  <p>${orderValue.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery</p>
                  <p>${deliveryPrice}</p>
                </div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <Button onClick={checkoutHandle}>Checkout</Button>
                <Button onClick={cartHandle}>Shopping bag</Button>
              </div>
            </>
          ) : (
            <p className="text-center">Cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CartOnHover;
