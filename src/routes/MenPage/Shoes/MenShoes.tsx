import { useLoaderData } from "react-router-dom";

const MenShoes = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Shoes</div>;
};

export default MenShoes;
