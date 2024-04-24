import { PiShoppingCart } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const CartOnHover = () => {
  const data = useAppSelector((state) => state.dataSlice.data)[0];
  const isCartOpen = useAppSelector((state) => state.cartSlice.isOpenCart);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const cartHandle = () => {
    navigate(ROUTES.CART);
  };

  const checkoutHandle = () => {
    navigate(ROUTES.CHECKOUT);
  };

  if (!data) return null;
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
        <p className=" text-xs font-light ">(1)</p>
      </div>

      {isCartOpen && (
        <div className="absolute right-[-100%] top-[100%] flex w-[360px]  flex-col rounded bg-white p-4 text-black-normal shadow-xl">
          <div className="flex items-center justify-center gap-4 p-8">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="h-24 w-24 shadow"
            />

            <div className="flex flex-col  gap-2 text-xs">
              <div>
                <p>{data.title}</p>
                <p>${data.price.toFixed(2)}</p>
              </div>
              <div className="flex gap-2 font-normal">
                <div>
                  <p>Quantiity:</p>
                  <p>Rating:</p>
                </div>
                <div>
                  <p>1</p>
                  <p>{data.rating}</p>
                </div>
              </div>
              <p></p>
            </div>
          </div>
          <button onClick={checkoutHandle}>Checkout</button>
          <button onClick={cartHandle}>Shopping bag</button>
        </div>
      )}
    </div>
  );
};

export default CartOnHover;
