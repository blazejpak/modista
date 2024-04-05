import { useParams } from "react-router-dom";

import manHero from "../../assets/categoryPage/men/man-hero.jpg";
import womanHero from "../../assets/categoryPage/women/woman-hero.jpg";
import accessoriesHero from "../../assets/categoryPage/accessories/accessories-hero.jpg";

const HeroSection = () => {
  const { category } = useParams();

  let img;

  if (category === "men") img = manHero;
  if (category === "women") img = womanHero;
  if (category === "accessories") img = accessoriesHero;

  return (
    <section className="relative">
      {img && (
        <img
          alt={`image of ${category}`}
          height={800}
          src={img}
          className="grayscale"
        />
      )}
      <div className="absolute left-[50%] top-0 translate-x-[-50%] rounded bg-grey-lighter p-2 text-lg font-bold uppercase shadow-lg md:p-10 md:text-3xl">
        <p>{category}</p>
      </div>
    </section>
  );
};

export default HeroSection;
