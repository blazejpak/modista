import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BeatLoader } from "react-spinners";
<<<<<<< HEAD
import { SortDataProvider } from "../context/SortDataContext";
=======
import { useEffect } from "react";
>>>>>>> 21158b5b9852b3a1b131cabb57e1dce528947880

function Root() {
  const { state } = useNavigation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
<<<<<<< HEAD
    <SortDataProvider>
      <div className="flex w-full items-center justify-center  bg-grey-normal">
        <div className="relative grid min-h-screen max-w-[2000px] grid-rows-[90px_1fr_300px]  bg-white shadow-xl lg:grid-rows-[90px_1fr_200px]">
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
=======
    <div className="flex w-full items-center justify-center">
      <div className="relative grid min-h-screen max-w-[2000px] grid-rows-[90px_1fr_300px] shadow-xl lg:grid-rows-[90px_1fr_200px] ">
        <Header />
        <main>
          {state === "loading" ? (
            <div className="absolute left-[50%] top-[25%] translate-x-[-50%] md:top-[35%] lg:top-[50%] ">
              <BeatLoader color="#D87D4A" size={36} />
            </div>
          ) : (
            <Outlet />
          )}
        </main>
        <Footer />
>>>>>>> 21158b5b9852b3a1b131cabb57e1dce528947880
      </div>
    </SortDataProvider>
  );
}

export default Root;
