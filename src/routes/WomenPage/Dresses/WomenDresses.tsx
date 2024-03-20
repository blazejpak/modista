import { useLoaderData } from "react-router-dom";

const WomenDresses = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>Dresses</div>;
};

export default WomenDresses;
