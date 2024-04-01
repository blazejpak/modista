import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SortDataContext } from "../../context/SortDataContext";
import { dataSort } from "./utils";

const DisplayProducts = ({ products }: any) => {
  const { sortedData, typeSort } = useContext(SortDataContext);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const { subCategory } = useParams();

  useEffect(() => {
    setDisplayData([]);
    if (sortedData.length > 0) {
      const sortData = dataSort(products, typeSort);
      setDisplayData(sortData);
    }
  }, [subCategory, products]);

  return (
    <div className="grid grid-cols-1 items-center justify-center divide-y-2 xs:grid-cols-2 xs:gap-2 xs:divide-y-0 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {displayData.length > 0 &&
        products.map((product: any) => {
          const priceWithDiscount =
            product.price * ((100 - product.discountPercentage) / 100);
          return (
            <Link
              className=" flex h-[420px] flex-col justify-between gap-2 py-4 shadow  xs:px-4 xs:shadow "
              key={product.id}
              to={`${product.id}`}
            >
              {product.images[0] && (
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className=" max-h-[300px] w-full max-w-[400px] "
                />
              )}
              <div>
                <h2 className=" text-sm first-letter:uppercase">
                  {product.title}
                </h2>
                <div className="flex gap-2">
                  <p className="line-through">${product.price.toFixed(2)} </p>
                  <p className="font-bold text-red-500">
                    ${priceWithDiscount.toFixed(2)}{" "}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default DisplayProducts;
