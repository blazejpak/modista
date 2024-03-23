import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ROUTES from "./utils/routes";

import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";

import HomePage from "./routes/HomePage/HomePage";
import CategoryPage from "./routes/CategoryPage/CategoryPage";

import { CategoryDataLoader } from "./routes/CategoryPage/CategoryDataLoader";

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
        loader={async ({ params }) => {
          console.log(params);
          const category = params.category || "";
          console.log(category);
          return await CategoryDataLoader(category);
        }}
        errorElement={<ErrorPage />}
      >
        <Route
          path={":product"}
          element={<CategoryPage />}
          loader={async ({ params }) => {
            console.log(params);
            const category = params.category || "";
            console.log(category);
            return await CategoryDataLoader(category);
          }}
          errorElement={<ErrorPage />}
        ></Route>
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
