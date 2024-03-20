import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  LoaderFunctionArgs,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ROUTES from "./utils/routes";

import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import MenLayout from "./routes/MenPage/MenLayout";
import WomenLayout from "./routes/WomenPage/WomenLayout";

import HomePage from "./routes/HomePage/HomePage";
import MenPage from "./routes/MenPage/MenPage";
import MenShirts from "./routes/MenPage/Shirts/MenShirts";
import MenShoes from "./routes/MenPage/Shoes/MenShoes";
import MenWatches from "./routes/MenPage/Watches.tsx/MenWatches";
import WomenPage from "./routes/WomenPage/WomenPage";
import WomenTops from "./routes/WomenPage/Tops/WomenTops";
import WomenDresses from "./routes/WomenPage/Dresses/WomenDresses";
import WomenShoes from "./routes/WomenPage/Shoes/WomenShoes";

import { MenLoader } from "./routes/MenPage/ManLoader";
import { MenShirtsLoader } from "./routes/MenPage/Shirts/MenShirtsLoader";
import { MenShoesLoader } from "./routes/MenPage/Shoes/MenShoesLoader";
import { MenWatchesLoader } from "./routes/MenPage/Watches.tsx/MenWatchesLoader";
import { WomenLoader } from "./routes/WomenPage/WomenLoader";
import { WomenDressesLoader } from "./routes/WomenPage/Dresses/WomenDressesLoader";
import { WomenTopsLoader } from "./routes/WomenPage/Tops/WomenTopsLoader";
import { WomenShoesLoader } from "./routes/WomenPage/Shoes/WomenShoesLoader";
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

      {/* MAN SECTION */}
      <Route
        path={ROUTES.MEN}
        element={<MenLayout />}
        errorElement={<ErrorPage />}
      >
        <Route
          index
          path={ROUTES.MEN}
          loader={MenLoader}
          element={<MenPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={ROUTES.MEN_SHIRTS}
          element={<MenShirts />}
          errorElement={<ErrorPage />}
          loader={MenShirtsLoader}
        />
        <Route
          path={ROUTES.MEN_SHOES}
          element={<MenShoes />}
          errorElement={<ErrorPage />}
          loader={MenShoesLoader}
        />
        <Route
          path={ROUTES.MEN_WATCHES}
          element={<MenWatches />}
          errorElement={<ErrorPage />}
          loader={MenWatchesLoader}
        />
      </Route>

      {/* WOMAN SECTION */}

      <Route
        path={ROUTES.WOMEN}
        element={<WomenLayout />}
        errorElement={<ErrorPage />}
      >
        <Route
          index
          path={ROUTES.WOMEN}
          loader={WomenLoader}
          element={<WomenPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={ROUTES.WOMEN_DRESSES}
          element={<WomenDresses />}
          errorElement={<ErrorPage />}
          loader={WomenDressesLoader}
        />
        <Route
          path={ROUTES.WOMEN_TOPS}
          element={<WomenTops />}
          errorElement={<ErrorPage />}
          loader={WomenTopsLoader}
        />
        <Route
          path={ROUTES.WOMEN_SHOES}
          element={<WomenShoes />}
          errorElement={<ErrorPage />}
          loader={WomenShoesLoader}
        />
      </Route>

      <Route
        path={"category/:category"}
        element={<CategoryPage />}
        loader={({ params }: LoaderFunctionArgs<string>) =>
          CategoryDataLoader(params.category!)
        }
        errorElement={<ErrorPage />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
