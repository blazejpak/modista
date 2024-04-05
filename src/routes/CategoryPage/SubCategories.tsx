import { Link, useParams } from "react-router-dom";
import { categoryLinks } from "./categoryLinks";

const SubCategories = () => {
  const { category } = useParams();

  const linkArr = category ? categoryLinks[category] : [];

  return (
    <section>
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-8 ">
        {linkArr.map(({ link, label, img }) => {
          return (
            <Link
              key={img}
              to={`/${link}`}
              relative="route"
              className="group relative h-full overflow-hidden rounded-xl bg-black-lighter transition-transform focus:scale-105 "
            >
              {img && (
                <img
                  alt={label}
                  src={`${img}`}
                  height={300}
                  className="h-[350px] w-[200px] grayscale  group-hover:grayscale-0 md:w-[250px] lg:h-[450px] lg:w-[400px]"
                />
              )}
              <p className=" p-6 text-center uppercase text-grey-lighter transition-colors group-hover:text-gold-dark ">
                {label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SubCategories;
