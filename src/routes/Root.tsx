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
    console.log(data);
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col overflow-x-hidden min-h-screen relative  max-w-[2000px] ">
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
