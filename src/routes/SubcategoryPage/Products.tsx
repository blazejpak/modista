import { Link } from "react-router-dom";
import { Product } from "../../utils/types";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  console.log(products);
  return (
    <div className="grid grid-cols-1 items-center justify-center divide-y-2 xs:grid-cols-2 xs:gap-2 xs:divide-y-0 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {products.length > 0 &&
        products.map((product) => {
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
                <p className=" text-sm first-letter:uppercase">
                  {product.title}
                </p>
                <div className="flex gap-2">
                  <p className="line-through">${product.price.toFixed(2)} </p>
                  <p className="font-bold text-red-500">
                    ${priceWithDiscount.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Products;
