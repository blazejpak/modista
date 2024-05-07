import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import { useEffect } from "react";

import { BeatLoader } from "react-spinners";

import { SortDataProvider } from "../context/SortDataContext";
<<<<<<< HEAD
import { useAppDispatch } from "../store/hooks";
import { Category } from "../utils/types";
=======
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Category, Product } from "../utils/types";
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
import { pushDataIntoArray } from "../utils/helpers";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
import { sendData } from "../store/reducers/dataSlice";
import { sendCartData } from "../store/reducers/cartSlice";
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

function Root() {
  const dispatch = useAppDispatch();
  const data = useLoaderData() as Category[];
  const getData = pushDataIntoArray(data);
<<<<<<< HEAD
  const cart = useSelector((state) => state.cartSlice.cart);
=======
  const cart = useAppSelector((state) => state.cart.cartData);
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cartData", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    if (getData) {
<<<<<<< HEAD
      let newData = [];
=======
      let newData = [] as Product[];
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
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

<<<<<<< HEAD
      dispatch({ type: "data/getData", payload: newData });
=======
      dispatch(sendData(newData));
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
    }
  }, []);

  useEffect(() => {
    if (cart.length === 0) {
      const cartDataLocalStorage = localStorage.getItem("cartData");
      if (cartDataLocalStorage !== null) {
<<<<<<< HEAD
        dispatch({
          type: "cart/cartData",
          payload: JSON.parse(cartDataLocalStorage),
        });
=======
        dispatch(sendCartData(JSON.parse(cartDataLocalStorage)));
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
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
