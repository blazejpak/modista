import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";
import { SortDataProvider } from "../context/SortDataContext";

function Root() {
  const { state } = useNavigation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SortDataProvider>
      <div className="flex w-full items-center justify-center overflow-x-hidden  bg-grey-normal">
        <div className="relative grid min-h-screen max-w-[2000px] grid-rows-[90px_1fr_300px]  bg-white shadow-xl lg:grid-rows-[90px_1fr_200px]">
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
