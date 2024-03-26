import { useLoaderData } from "react-router-dom";

const CategoryPage = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>CATEGORY</div>;
};

export default CategoryPage;
