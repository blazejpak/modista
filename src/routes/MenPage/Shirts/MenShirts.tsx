import { useLoaderData } from "react-router-dom";

const MenShirts = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>Shirts</div>;
};

export default MenShirts;
