import { useLoaderData } from "react-router-dom";

const MenPage = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>MenPage</div>;
};

export default MenPage;