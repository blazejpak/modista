import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage/HomePage";
import ManPage from "./routes/MenPage/MenPage";
import ROUTES from "./utils/routes";
import { MenLoader } from "./routes/MenPage/ManLoader";
import Shirts from "./routes/MenPage/Shirts/Shirts";
import { ShirtsLoader } from "./routes/MenPage/Shirts/ShirtsLoader";
import Shoes from "./routes/MenPage/Shoes/Shoes";
import { ShoesLoader } from "./routes/MenPage/Shoes/ShoesLoader";
import Watches from "./routes/MenPage/Watches.tsx/Watches";
import { WatchesLoader } from "./routes/MenPage/Watches.tsx/WatchesLoader";

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
        path={ROUTES.MEN}
        loader={MenLoader}
        element={<ManPage />}
        errorElement={<ErrorPage />}
      >
        <Route
          path={ROUTES.MEN_SHIRTS}
          element={<Shirts />}
          errorElement={<ErrorPage />}
          loader={ShirtsLoader}
        />
        <Route
          path={ROUTES.MEN_SHOES}
          element={<Shoes />}
          errorElement={<ErrorPage />}
          loader={ShoesLoader}
        />
        <Route
          path={ROUTES.MEN_WATCHES}
          element={<Watches />}
          errorElement={<ErrorPage />}
          loader={WatchesLoader}
        />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
