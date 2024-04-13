import { useLoaderData } from "react-router-dom";
import HeroSection from "./HeroSection";
import LinksImages from "./LinksImages";
import Testimonials from "./Testimonials";
import { Category } from "../../utils/types";

const HomePage = () => {
  const data = useLoaderData() as Category[];

  const newData = data.map((items) => items.products);

  return (
    <section>
      <HeroSection />
      <LinksImages />
      <Testimonials />
    </section>
  );
};

export default HomePage;
