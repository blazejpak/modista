import { Link, useParams } from "react-router-dom";

import type { Product } from "../../utils/types";
import {
  getDataByCategory,
  getDataRatingAndDiscount,
} from "../../utils/helpers";
import { categoryLinks } from "../../utils/routes";
import { useAppSelector } from "../../store/hooks";

const Discount = () => {
  const category: string = useParams().category ?? "";

  const linkArr = category ? categoryLinks[category] : [];

  const allData = useAppSelector((state) => state.data.data);
  if (!allData) return null;

  const newData = getDataByCategory(allData, category);
  if (!newData) return null;

  const highDiscountProducts = getDataRatingAndDiscount(
    newData,
    "discount",
  ) as Product[];

  if (!highDiscountProducts) return null;

  return (
    <section className="flex flex-col gap-8">
      <h3 className=" mx-auto text-2xl font-bold uppercase">
        With the biggest discount
      </h3>
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-8 ">
        {linkArr &&
          highDiscountProducts
            .filter((products) => !!products)
            .map((product) => {
              const link = linkArr.find(
                (item) => item.fullName === product.category,
              );
              return (
                <Link
                  key={product.id}
                  to={`/${link?.link}/${product.id.toString()}`}
                  className="group relative h-[350px] w-[250px] overflow-hidden rounded-xl bg-black-lighter shadow transition-transform focus:scale-105"
                >
                  <img
                    alt={product.description}
                    src={product.images[0]}
                    height={300}
                    className="h-[250px] w-full "
                  />
                  <p className=" p-6 text-center uppercase text-grey-lighter transition-colors group-hover:text-gold-dark ">
                    {product.title}
                  </p>
                  <div className="absolute right-0 top-0 rounded-full bg-red-600/80 p-4">
                    <p className="text-xl font-bold text-white">
                      -{product.discountPercentage}%
                    </p>
                  </div>
                </Link>
              );
            })}
      </div>
    </section>
  );
};

export default Discount;
