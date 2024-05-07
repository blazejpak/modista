import Button from "../../components/main/UI/Button";
import { useAppSelector } from "../../store/hooks";

import {
  cartOrderValue,
  cartTotalPrice,
  deliveryPrice,
} from "../../utils/variables";

const SummaryCart = ({ ...props }) => {
  const cart = useAppSelector((state) => state.cart.cartData);

  const orderValue = cartOrderValue(cart);
  const totalPrice = cartTotalPrice(orderValue);

  return (
    <div className="flex w-full flex-col gap-8 rounded bg-white p-8 shadow-sm md:mt-10 md:h-fit md:max-w-[300px] ">
      <div>
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

      <Button onClick={props.onClick} className="self-center">
        {props.text}
      </Button>
    </div>
  );
};

export default SummaryCart;
