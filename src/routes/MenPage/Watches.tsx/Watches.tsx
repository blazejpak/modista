import { useLoaderData } from "react-router-dom";

const Watches = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Watches</div>;
};

export default Watches;
