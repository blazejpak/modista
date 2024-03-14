import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function Root() {
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const response = await data.json();
      console.log(response);
      return response;
    };
    const data = getData();
    console.log(data);
  }, []);

  return (
    <div className="grid grid-rows-[90px_1fr_650px] overflow-x-hidden md:grid-rows-[90px_1fr_400px]">
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Root;
