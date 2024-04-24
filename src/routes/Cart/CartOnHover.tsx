import { PiShoppingCart } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useEffect } from "react";
import { groupProductInCartByAmount } from "../../utils/helpers";

const CartOnHover = () => {
  const cart = useAppSelector((state) => state.cartSlice.cart);
  const isCartOpen = useAppSelector((state) => state.cartSlice.isOpenCart);
  const dispatch = useAppDispatch();

  if (!cart) return null;

  useEffect(() => {
    const groupAmount = groupProductInCartByAmount(cart);

    dispatch({ type: "cart/cartData", payload: groupAmount });
  }, []);

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
        <p className=" text-xs font-light ">({cart.length})</p>
      </div>

      {isCartOpen && (
        <div className="absolute right-[-100%] top-[100%] flex   w-[360px] flex-col  rounded bg-white p-4 text-black-normal shadow-xl">
          <div className="max-h-[250px] overflow-y-auto">
            {cart.length > 0 ? (
              cart.map((product) => {
                return (
                  <div
                    className="flex items-center justify-center gap-4 p-8"
                    key={product.id}
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-24 w-24 shadow"
                    />

                    <div className="flex flex-col  gap-2 text-xs">
                      <div>
                        <p>{product.title}</p>
                        <p>${product.price.toFixed(2)}</p>
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
            <>
              <button onClick={checkoutHandle}>Checkout</button>
              <button onClick={cartHandle}>Shopping bag</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartOnHover;
