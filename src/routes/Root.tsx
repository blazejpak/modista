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
    <div className="flex flex-col overflow-x-hidden min-h-screen relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
