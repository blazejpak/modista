import { useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";
<<<<<<< HEAD
import Button from "../../components/main/Subcategory/Button";
=======
import Button from "../../components/main/UI/Button";
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

import Products from "../SubcategoryPage/Products";

const Search = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const searchedData: string = state.search;
<<<<<<< HEAD
  const data = useAppSelector((state) => state.dataSlice.data);
=======
  const data = useAppSelector((state) => state.data.data);
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
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
