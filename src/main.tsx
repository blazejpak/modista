import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ROUTES } from "./utils/routes";
import { setupStore } from "./store/store";

import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import { RootLoader } from "./routes/RootLoader";

import HomePage from "./routes/HomePage/HomePage";
import CategoryPage from "./routes/CategoryPage/CategoryPage";
import ProductPage from "./routes/ProductPage/ProductPage";
import SubcategoryPage from "./routes/SubcategoryPage/SubcategoryPage";
import Search from "./routes/Search/Search";
import CartPage from "./routes/Cart/CartPage";
import CheckoutPage from "./routes/Checkout/CheckoutPage";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.HOMEPAGE}
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={RootLoader}
    >
      <Route
        index
        path={ROUTES.HOMEPAGE}
        element={<HomePage />}
        errorElement={<ErrorPage />}
      />
      <Route
        index
        path={ROUTES.CART}
        element={<CartPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        index
        path={ROUTES.CHECKOUT}
        element={<CheckoutPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        index
        path={ROUTES.SEARCH}
        element={<Search />}
        errorElement={<ErrorPage />}
      />
      <Route
        path={"category/:category"}
        element={<CategoryPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path={"category/:category/:subCategory"}
        element={<SubcategoryPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path={"category/:category/:subCategory/:productId"}
        element={<ProductPage />}
        errorElement={<ErrorPage />}
      />
    </Route>,
  ),
);

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
