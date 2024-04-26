import { v4 as uuidv4 } from "uuid";
import Button from "../../components/main/Subcategory/Button";
import { Cart } from "../../utils/types";

type DisplayProductsProps = {
  finalData: Cart[];
  addAmountOfProduct: (id: number) => void;
  subtractAmountOfProduct: (id: number) => void;
};

const DisplayProducts = ({
  finalData,
  addAmountOfProduct,
  subtractAmountOfProduct,
}: DisplayProductsProps) => {
  return (
    <div className="mt-10 flex flex-col justify-center rounded bg-white">
      {finalData.length > 0 &&
        finalData.map((product) => {
          const id = uuidv4();

          return (
            <div
              className="flex   w-full flex-col items-center  gap-8 rounded  p-8 xs:flex-row md:max-w-[500px] md:p-2"
              key={id}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                height={160}
                className="h-48 w-48"
              />
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
                      ${product.priceWithDiscount}
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
                    <p>
                      ${(product.priceWithDiscount * product.amount).toFixed(2)}
                    </p>
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
