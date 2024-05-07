import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";

import { PiShoppingCart } from "react-icons/pi";
import { sendCartData } from "../../store/reducers/cartSlice";

const CartButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cart = useAppSelector((state) => state.cart.cartData);

  useEffect(() => {
    dispatch(sendCartData(cart));
  }, []);

  const cartHandle = () => {
    navigate(ROUTES.CART);
  };

  return (
    <button className=" group relative h-full content-center">
      <div
        className="hover-link flex cursor-pointer items-center  justify-center  gap-1 transition-all active:scale-110"
        onClick={cartHandle}
      >
        <PiShoppingCart size={24} />
      </div>
    </button>
  );
};

export default CartButton;
