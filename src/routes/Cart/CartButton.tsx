import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";
import { groupProductInCartByAmount } from "../../utils/helpers";

import { PiShoppingCart } from "react-icons/pi";

const CartButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cart = useAppSelector((state) => state.cartSlice.cart);
  if (!cart) return null;
  const groupAmount = groupProductInCartByAmount(cart);

  useEffect(() => {
    dispatch({ type: "cart/cartData", payload: groupAmount });
  }, []);

  const cartHandle = () => {
    navigate(ROUTES.CART);
  };

  return (
    <div className=" group relative h-full content-center">
      <div
        className="hover-link flex cursor-pointer items-center  justify-center  gap-1 transition-all active:scale-110"
        onClick={cartHandle}
      >
        <PiShoppingCart size={24} />
      </div>
    </div>
  );
};

export default CartButton;
