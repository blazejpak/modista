import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/main/UI/Button";

import { Product } from "../../utils/types";
import { getParamBySubcategory } from "../../utils/helpers";

interface ProductsProps {
  products: Product[];
}

const productsPerPage = 5;

const Products = ({ products }: ProductsProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(products.length / productsPerPage);
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const showProducts = products.slice(firstProduct, lastProduct);

  const changePageNumber = (page: number) => {
    if (page === 0) {
      setCurrentPage(1);
    } else if (page > numberOfPages) {
      setCurrentPage(numberOfPages);
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="grid grid-cols-1 items-center justify-center divide-y-2 xs:grid-cols-2 xs:gap-2 xs:divide-y-0 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {showProducts.length > 0 &&
          showProducts.map((product) => {
            const paramId = getParamBySubcategory(product) as string;

            return (
              <Link
                className=" flex  flex-col justify-between gap-4 py-4 shadow  xs:px-4 xs:shadow "
                key={product.id}
                to={`/${paramId}/${product.id}`}
              >
                {product.images[0] && (
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className=" max-h-[300px] w-full max-w-[400px] object-contain"
                  />
                )}
                <div className="px-4 xs:px-0">
                  <p className=" text-sm first-letter:uppercase">
                    {product.title}
                  </p>
                  <div className="flex gap-2">
                    <p className="line-through">${product.price.toFixed(2)} </p>
                    <p className="font-bold text-red-500">
                      ${product.priceWithDiscount.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="flex items-center gap-4 self-center">
        {currentPage > 1 && (
          <Button
            className="w-10"
            onClick={() => changePageNumber(currentPage - 1)}
          >
            -
          </Button>
        )}
        <p className="font-bold">{currentPage}</p>
        {currentPage < numberOfPages && (
          <Button
            className="w-10"
            onClick={() => changePageNumber(currentPage + 1)}
          >
            +
          </Button>
        )}
      </div>
    </section>
  );
};

export default Products;
