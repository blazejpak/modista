import { useNavigate } from "react-router-dom";
import Button from "../../components/main/Subcategory/Button";
import { Cart } from "../../utils/types";
import { deliveryPrice } from "../../utils/variables";
import { ROUTES } from "../../utils/routes";

type SummaryCartProps = {
  finalData: Cart[];
};

const SummaryCart = ({ finalData }: SummaryCartProps) => {
  const navigate = useNavigate();

  const checkoutHandle = () => {
    navigate(ROUTES.CHECKOUT);
  };

  const cartOrderValue = finalData.reduce((acc, product) => {
    acc += product.priceWithDiscount * product.amount;

    return acc;
  }, 0);

  const cartTotalPrice = cartOrderValue + deliveryPrice;

  return (
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
  );
};

export default SummaryCart;
