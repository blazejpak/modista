import { Link, useLoaderData } from "react-router-dom";
import type { Category } from "../../utils/types";
import { getDataRatingAndDiscount } from "../../utils/helpers";

const Bestsellers = () => {
  const data = useLoaderData() as Category[];

  const highRatedProducts = getDataRatingAndDiscount(data, "discount");

  if (highRatedProducts)
    return (
      <section className="flex flex-col gap-8">
        <h2 className=" mx-auto text-3xl font-bold uppercase">
          Check ours bestsellers!
        </h2>
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-8 ">
          {highRatedProducts.map(
            (product) =>
              product && (
                <Link
                  key={product.id}
                  to={product.id.toString()}
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
                </Link>
              ),
          )}
        </div>
      </section>
    );
};

export default Bestsellers;
