import { v4 as uuidv4 } from "uuid";

<<<<<<< HEAD
import { Cart } from "../../utils/types";

import Button from "../../components/main/Subcategory/Button";

type DisplayProductsProps = {
  finalData: Cart[];
=======
import Button from "../../components/main/UI/Button";
import { useAppSelector } from "../../store/hooks";

type DisplayProductsProps = {
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
  addAmountOfProduct: (id: number) => void;
  subtractAmountOfProduct: (id: number) => void;
};

const DisplayProducts = ({
<<<<<<< HEAD
  finalData,
  addAmountOfProduct,
  subtractAmountOfProduct,
}: DisplayProductsProps) => {
  return (
    <div className="mt-10 flex flex-col justify-center rounded bg-white">
      {finalData.length > 0 &&
        finalData.map((product) => {
=======
  addAmountOfProduct,
  subtractAmountOfProduct,
}: DisplayProductsProps) => {
  const data = useAppSelector((state) => state.cart.cartData);

  return (
    <div className="mt-10 flex flex-wrap  rounded ">
      {data.length > 0 &&
        data.map((product) => {
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
          const id = uuidv4();

          const totalPriceOfProduct =
            product.priceWithDiscount * product.amount;

          return (
            <div
<<<<<<< HEAD
              className="flex   w-full flex-col items-center  gap-8 rounded  p-8 xs:flex-row md:max-w-[500px] md:p-2"
=======
              className="flex w-full  flex-col items-center gap-8  rounded bg-white  p-8 xs:flex-row md:max-w-[400px] md:p-2"
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
              key={id}
            >
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  height={160}
                  className="h-48 w-48"
                />
              )}
              <div className="flex flex-col  gap-6 text-xs">
                <div className="text-base">
                  <p className="font-bold first-letter:uppercase">
                    {product.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-base line-through">
                      ${product.price.toFixed(2)}
                    </p>
                    <p className="text-lg font-bold text-red-500 ">
                      ${product.priceWithDiscount.toFixed(2)}
                    </p>
                  </div>
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
                    <p>${totalPriceOfProduct.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => subtractAmountOfProduct(product.id)}
                    className="max-w-[40px]"
                  >
                    -
                  </Button>
                  <p className="text-lg ">{product.amount}</p>
                  <Button
                    className="max-w-[40px]"
                    onClick={() => addAmountOfProduct(product.id)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DisplayProducts;
