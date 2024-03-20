import React from "react";
import { useLoaderData } from "react-router-dom";

const Shoes = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Shoes</div>;
};

export default Shoes;
