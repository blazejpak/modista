import { useLoaderData, useParams } from "react-router";
import SortProducts from "./SortProducts";
import { useContext, useEffect } from "react";
import { SortDataContext } from "../../context/SortDataContext";
import { dataSort } from "./utils";
import DisplayProducts from "./DisplayProducts";

const SubcategoryPage = () => {
  const { sortedData, setSortedData } = useContext(SortDataContext);
  const { subCategory } = useParams();

  // TODO type for data
  const data = useLoaderData() as any;
  const { products } = data;

  useEffect(() => {
    setSortedData(products);
  }, [subCategory]);

  useEffect(() => {
    if (sortedData.length > 0) {
      const sortData = dataSort(products, "Lowest price");
      setSortedData(sortData);
    }
  }, [subCategory]);

  return (
    <section className="flex flex-col gap-8 p-6">
      <SortProducts />

      {sortedData.length > 0 && <DisplayProducts products={sortedData} />}
    </section>
  );
};

export default SubcategoryPage;
