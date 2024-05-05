import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { SortDataContext } from "../../context/SortDataContext";
import { dataSort, getDataBySubcategory } from "../../utils/helpers";
import { Product } from "../../utils/types";
import { LinksImg, categoryLinks } from "../../utils/routes";

import SortProducts from "./SortProducts";
import Products from "./Products";
import FilterData from "./FilterData";

const SubcategoryPage = () => {
  const { category, subCategory } = useParams();
  const { sortedData, setSortedData } = useContext(SortDataContext);

  const data = useAppSelector((state) => state.data.data);

  const links = categoryLinks[category as keyof LinksImg];
  const selectedLink = links.find(
    (link) => link.label === subCategory,
  )?.fullName;

  if (!selectedLink) return null;
  const newData = getDataBySubcategory(data, selectedLink);

  if (!newData) return null;
  const sortData = dataSort(newData, "Lowest price") as Product[];

  useEffect(() => {
    setSortedData(sortData);
  }, [selectedLink, data]);

  return (
    <section className="flex flex-col  gap-8 p-6">
      <div className="flex flex-wrap gap-8 px-2 md:px-8 lg:px-[10%]">
        <SortProducts />
        <FilterData data={newData} currentLink={selectedLink} />
      </div>

      {sortedData.length > 0 && <Products products={sortedData} />}
    </section>
  );
};

export default SubcategoryPage;
