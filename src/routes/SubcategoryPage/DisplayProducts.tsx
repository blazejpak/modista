import { useContext } from "react";
import { Link } from "react-router-dom";
import { SortDataContext } from "../../context/SortDataContext";

const DisplayProducts = () => {
  const { sortedData } = useContext(SortDataContext);
  console.log(sortedData);
  return (
    <div className="grid grid-cols-1 items-center justify-center divide-y-2 xs:grid-cols-2 xs:gap-2 xs:divide-y-0 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {sortedData.length > 0 &&
        sortedData.map((product: any) => {
          return (
            <Link
              className="flex h-[420px] flex-col justify-between gap-2 py-4 shadow  xs:px-4 xs:shadow "
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
                <p>${product.price.toFixed(2)} </p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default DisplayProducts;
