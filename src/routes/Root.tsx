import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { categoryLinks } from "./CategoryPage/categoryLinks";

function Root() {
  const { state } = useNavigation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URI = "https://dummyjson.com/products/category/";
        const requests = [];

        for (const category in categoryLinks) {
          const categoryRequests = categoryLinks[category].map(
            (subcategory) => {
              return fetch(URI + subcategory.fullName).then((response) =>
                response.json(),
              );
            },
          );
          requests.push(...categoryRequests);
        }

        const response = await Promise.all(requests);
        dispatch({ type: "data/getData", payload: response });
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative grid min-h-screen max-w-[2000px] grid-rows-[90px_1fr_300px] shadow-xl lg:grid-rows-[90px_1fr_200px] ">
        <Header />
        <main>
          {state === "loading" ? (
            <div className="absolute left-[50%] top-[35%] translate-x-[-50%] ">
              <BeatLoader color="#D87D4A" size={36} />
            </div>
          ) : (
            <Outlet />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Root;
