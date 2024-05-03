import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import { useEffect } from "react";

import { BeatLoader } from "react-spinners";

import { SortDataProvider } from "../context/SortDataContext";
import { useAppDispatch } from "../store/hooks";
import { Category } from "../utils/types";
import { pushDataIntoArray } from "../utils/helpers";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";

function Root() {
  const dispatch = useAppDispatch();
  const data = useLoaderData() as Category[];
  const getData = pushDataIntoArray(data);
  const cart = useSelector((state) => state.cartSlice.cart);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cartData", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    if (getData) {
      let newData = [];
      for (const addDiscount of getData) {
        const priceWithDiscount: number = +(
          addDiscount.price *
          ((100 - addDiscount.discountPercentage) / 100)
        );
        newData.push({
          ...addDiscount,
          priceWithDiscount,
          amount: 0,
        });
      }

      dispatch({ type: "data/getData", payload: newData });
    }
  }, []);

  useEffect(() => {
    if (cart.length === 0) {
      const cartDataLocalStorage = localStorage.getItem("cartData");
      if (cartDataLocalStorage !== null) {
        dispatch({
          type: "cart/cartData",
          payload: JSON.parse(cartDataLocalStorage),
        });
      }
    }
  }, []);

  const { state } = useNavigation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: "cart/openCart", payload: false });
  }, [pathname]);

  return (
    <SortDataProvider>
      <div className="  w-full overflow-x-hidden  bg-grey-normal">
        <div className="relative mx-auto grid min-h-screen max-w-[2000px] grid-rows-[90px_1fr_300px]   shadow-xl lg:grid-rows-[90px_1fr_200px]">
          <Header />
          <main>
            {state === "loading" ? (
              <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex items-center justify-center bg-black ">
                <BeatLoader color="#D87D4A" size={36} />
              </div>
            ) : (
              <Outlet />
            )}
          </main>
          <Footer />
        </div>
      </div>
    </SortDataProvider>
  );
}

export default Root;
