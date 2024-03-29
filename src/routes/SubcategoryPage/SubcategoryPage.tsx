import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import SortProducts from "./SortProducts";

const SubcategoryPage = () => {
  // TODO type for data
  const data = useLoaderData() as any;

  return (
    <section className="flex flex-col gap-8 p-6">
      <SortProducts />

      <div className="grid grid-cols-1 items-center justify-center divide-y-2 xs:grid-cols-2 xs:gap-2 xs:divide-y-0 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.products.map((product: any) => {
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
    </section>
  );
};

export default SubcategoryPage;
