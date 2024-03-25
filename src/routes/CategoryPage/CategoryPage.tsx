import { useLoaderData } from "react-router-dom";
import Bestsellers from "./Bestsellers";
import HeroSection from "./HeroSection";
import SubCategories from "./SubCategories";

const CategoryPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <main className="mb-16 flex flex-col gap-16 lg:px-[10%]">
      <HeroSection />
      <SubCategories />
      <Bestsellers />
    </main>
  );
};

export default CategoryPage;
