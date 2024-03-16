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
    <div className="grid grid-rows-[90px_1fr_300px] overflow-x-hidden min-h-screen relative lg:grid-rows-[90px_1fr_200px]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
