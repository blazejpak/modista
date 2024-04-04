import { useLoaderData } from "react-router";
import SortProducts from "./SortProducts";
import { useContext, useEffect } from "react";
import { SortDataContext } from "../../context/SortDataContext";
import { dataSort } from "./utils";
import DisplayProducts from "./DisplayProducts";
import FilterData from "./FilterData";

const SubcategoryPage = () => {
  const { sortedData, setSortedData } = useContext(SortDataContext);

  // TODO type for data
  const data = useLoaderData() as any;
  const { products } = data;

  useEffect(() => {
    if (products.length > 0) {
      const sortData = dataSort(products, "Lowest price");
      setSortedData(sortData);
    }
  }, []);

  return (
    <section className="flex flex-col  gap-8 p-6">
      <div className="flex justify-between px-2 md:px-8 lg:px-[10%]">
        <SortProducts />
        <FilterData data={products} />
      </div>

      {sortedData.length > 0 && <DisplayProducts products={sortedData} />}
    </section>
  );
};

export default SubcategoryPage;
