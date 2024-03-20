import { useLoaderData } from "react-router-dom";

const MenWatches = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Watches</div>;
};

export default MenWatches;
