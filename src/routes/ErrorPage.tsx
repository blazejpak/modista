import { useNavigate } from "react-router";

<<<<<<< HEAD
import Button from "../components/main/Subcategory/Button";
=======
import Button from "../components/main/UI/Button";
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

const ErrorPage = () => {
  const navigate = useNavigate();
  const backHomeHandler = (): void => {
    navigate("/");
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 bg-grey-normal p-[10%]">
      <h1 className="text-xl font-bold md:text-4xl">
        Something went wrong🛑🛑
      </h1>
      <p className="text-sm md:text-lg">
        We apologise for this problem. We will fix that ASAP 😊
      </p>

      <Button onClick={backHomeHandler}>HOME</Button>
    </div>
  );
};

export default ErrorPage;
