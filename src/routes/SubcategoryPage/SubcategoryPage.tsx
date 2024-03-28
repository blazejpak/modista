import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const SubcategoryPage = () => {
  // TODO type for data
  const data = useLoaderData() as any;
  console.log(data);

  return (
    <section className="p-6">
      <div className="xs:grid-cols-2 xs:divide-y-0 xs:gap-2 grid grid-cols-1 items-center justify-center divide-y-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.products.map((product: any) => {
            console.log(product.id);
            return (
              <Link
                className="xs:shadow xs:px-4 flex flex-col gap-2 py-4"
                key={product.id}
                to={`${product.id}`}
              >
                {product.images[0] && (
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="max-h-[320px] w-full max-w-[400px]"
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
