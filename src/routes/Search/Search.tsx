import { useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";
import Button from "../../components/main/Subcategory/Button";

import Products from "../SubcategoryPage/Products";

const Search = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const searchedData: string = state.search;
  const data = useAppSelector((state) => state.dataSlice.data);
  const newData = data.filter((items) => items.title.includes(searchedData));

  const backToHomepageHandle = () => {
    navigate(ROUTES.HOMEPAGE);
  };
  return (
    <section className="py-20 md:px-[10%]">
      {newData.length > 0 ? (
        <Products products={newData} />
      ) : (
        <div className="flex flex-col items-center gap-8">
          <p className="text-center text-3xl font-bold">
            We didn't find {searchedData}
          </p>
          <Button onClick={backToHomepageHandle}>Back to Home</Button>
        </div>
      )}
    </section>
  );
};

export default Search;
