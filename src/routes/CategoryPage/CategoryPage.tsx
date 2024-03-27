import Bestsellers from "./Bestsellers";
import Discount from "./Discount";
import HeroSection from "./HeroSection";
import SubCategories from "./SubCategories";

const CategoryPage = () => {
  return (
    <main className="mb-16 flex flex-col items-center gap-16 lg:gap-24 lg:px-[10%]">
      <HeroSection />
      <SubCategories />
      <Bestsellers />
      <Discount />
    </main>
  );
};

export default CategoryPage;
