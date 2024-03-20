import { useLoaderData } from "react-router-dom";

const WomenShoes = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>Shoes</div>;
};

export default WomenShoes;
