import { useNavigate } from "react-router";
import ButtonCart from "../components/main/UI/ButtonCart";

const ErrorPage = () => {
  const navigate = useNavigate();
  const backHomeHandler = (): void => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 bg-grey-normal">
      <h1 className="text-xl font-bold md:text-4xl">
        Something went wrong🛑🛑
      </h1>
      <p className="text-sm md:text-lg">
        We apologise for this problem. We will fix that ASAP 😊
      </p>

      <ButtonCart onClick={backHomeHandler}>HOME</ButtonCart>
    </div>
  );
};

export default ErrorPage;
