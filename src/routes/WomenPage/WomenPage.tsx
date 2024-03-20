import { useLoaderData } from "react-router-dom";

const WomenPage = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>WomenPage</div>;
};

export default WomenPage;
