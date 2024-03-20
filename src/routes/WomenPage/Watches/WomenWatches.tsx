import { useLoaderData } from "react-router-dom";

const WomenWatches = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>Watches</div>;
};

export default WomenWatches;
