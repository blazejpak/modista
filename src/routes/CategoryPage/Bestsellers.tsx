import { Link, useLoaderData, useParams } from "react-router-dom";
import type { Category, Product } from "../../utils/types";
import { getDataRatingAndDiscount } from "../../utils/helpers";
import { categoryLinks } from "./categoryLinks";

const Bestsellers = () => {
  const data = useLoaderData() as Category[];
  const { category } = useParams();
  const linkArr = category ? categoryLinks[category] : [];

  const highRatedProducts = getDataRatingAndDiscount(
    data,
    "rating",
  ) as Product[];

  if (!highRatedProducts) return null;

  return (
    <section className="flex flex-col gap-8">
      <h2 className=" mx-auto text-3xl font-bold uppercase">
        Check ours bestsellers!
      </h2>
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-8 ">
        {linkArr &&
          highRatedProducts
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
                  {product.images[0] && (
                    <img
                      alt={product.description}
                      src={product.images[0]}
                      height={300}
                      className="h-[250px] w-full "
                    />
                  )}
                  <p className=" p-6 text-center uppercase text-grey-lighter transition-colors group-hover:text-gold-dark ">
                    {product.title}
                  </p>
                </Link>
              );
            })}
      </div>
    </section>
  );
};

export default Bestsellers;