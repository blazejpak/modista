import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ROUTES from "./utils/routes";
import { store } from "./store/store";

import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";

import HomePage from "./routes/HomePage/HomePage";
import CategoryPage from "./routes/CategoryPage/CategoryPage";
import ProductPage from "./routes/ProductPage/ProductPage";
import SubcategoryPage from "./routes/SubcategoryPage/SubcategoryPage";

import { CategoryDataLoader } from "./routes/CategoryPage/CategoryDataLoader";
import { ProductPageLoader } from "./routes/ProductPage/ProductPageLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.HOMEPAGE}
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route
        index
        path={ROUTES.HOMEPAGE}
        element={<HomePage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path={"category/:category"}
        element={<CategoryPage />}
        errorElement={<ErrorPage />}
        loader={({ params }: any) => {
          const category = params.category || "";

          return CategoryPageLoader(category);
        }}
      />
      <Route
        path={"category/:category/:subCategory"}
        element={<SubcategoryPage />}
        loader={({ params }) => {
          const category = params.category || "";
          const subCategory = params.subCategory || "";
          return SubcategoryLoader(category, subCategory);
        }}
        errorElement={<ErrorPage />}
      />
      <Route
        path={"category/:category/:subCategory/:product"}
        element={<ProductPage />}
        loader={({ params }) => {
          const category = params.category || "";
          const product = params.product || "";
          return ProductPageLoader(category, product);
        }}
        errorElement={<ErrorPage />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
