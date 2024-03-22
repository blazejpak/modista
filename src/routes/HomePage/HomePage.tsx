import mainImg from "../../assets/pexels-primary-image.webp";
import { navLinks } from "../../utils/routes";
import LinksImages from "./LinksImages";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <section>
      <div className="relative">
        <img
          alt="Image of clothes"
          src={mainImg}
          className="w-full bg-cover"
          height={600}
        />
        <div className="absolute left-[50%] top-[50%] h-fit max-w-[500px] translate-x-[-50%] translate-y-[-50%]  rounded-lg bg-grey-normal p-4 md:p-10">
          <h1 className="text-xs font-bold sm:text-sm md:text-lg lg:text-xl">
            Crafting unique styles tailored just for you - because fashion is
            more than just clothing, it's an expression of individuality.
          </h1>
        </div>
      </div>

      <LinksImages />

      <Testimonials />
    </section>
  );
};

export default HomePage;
