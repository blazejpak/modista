import { useLoaderData } from "react-router-dom";

const WomenTops = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>Tops</div>;
};

export default WomenTops;
