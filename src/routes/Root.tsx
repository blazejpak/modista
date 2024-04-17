import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import { useEffect } from "react";

import { BeatLoader } from "react-spinners";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { Category } from "../utils/types";
import { useAppDispatch } from "../store/hooks";
import { pushDataIntoArray } from "../utils/helpers";

function Root() {
  const dispatch = useAppDispatch();
  const data = useLoaderData() as Category[];
  const getData = pushDataIntoArray(data);

  useEffect(() => {
    if (getData) dispatch({ type: "data/getData", payload: getData });
  }, []);

  const { state } = useNavigation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative grid min-h-screen max-w-[2000px] grid-rows-[90px_1fr_300px] bg-grey-normal shadow-xl lg:grid-rows-[90px_1fr_200px]">
        <Header />
        <main>
          {state === "loading" ? (
            <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex items-center  justify-center bg-black ">
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
