import { useLoaderData } from "react-router-dom";

const Shirts = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>Shirts</div>;
};

export default Shirts;
