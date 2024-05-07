<<<<<<< HEAD
import Button from "../../components/main/Subcategory/Button";

import { Cart } from "../../utils/types";
import { deliveryPrice } from "../../utils/variables";

type SummaryCartProps = {
  finalData: Cart[];
  text: string;
  onClick: () => void;
};

const SummaryCart = ({ finalData, text, onClick }: SummaryCartProps) => {
  const cartOrderValue = finalData.reduce((acc, product) => {
    acc += product.priceWithDiscount * product.amount;

    return acc;
  }, 0);

  const cartTotalPrice = cartOrderValue + deliveryPrice;
=======
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
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

  return (
    <div className="flex w-full flex-col gap-8 rounded bg-white p-8 shadow-sm md:mt-10 md:h-fit md:max-w-[300px] ">
      <div>
        <div className="flex justify-between">
          <p>Order value</p>
<<<<<<< HEAD
          <p>${cartOrderValue.toFixed(2)}</p>
=======
          <p>${orderValue.toFixed(2)}</p>
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>${deliveryPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
<<<<<<< HEAD
          <p>${cartTotalPrice.toFixed(2)}</p>
        </div>
      </div>

      <Button onClick={onClick} className="self-center">
        {text}
=======
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <Button onClick={props.onClick} className="self-center">
        {props.text}
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
      </Button>
    </div>
  );
};

export default SummaryCart;
