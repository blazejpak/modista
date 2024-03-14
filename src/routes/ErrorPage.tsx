import { useNavigate } from "react-router";
// import ButtonGold from "../ui/ButtonGold";

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

      {/* <ButtonGold text="Home Page" onClick={backHomeHandler} /> */}
    </div>
  );
};

export default ErrorPage;
