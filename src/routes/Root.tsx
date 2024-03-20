import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Root() {
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://dummyjson.com/products/categories");
      const response = await data.json();
      console.log(response);
      return response;
    };
    const data = getData();
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative flex min-h-screen max-w-[2000px] flex-col  overflow-x-hidden ">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Root;
