import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BeatLoader } from "react-spinners";

function Root() {
  const { state } = useNavigation();

  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative grid min-h-screen max-w-[2000px] grid-rows-[90px_1fr_300px] shadow-xl lg:grid-rows-[90px_1fr_200px] ">
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
    </div>
  );
}

export default Root;
