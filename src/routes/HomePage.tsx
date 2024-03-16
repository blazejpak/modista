import mainImg from "../assets/pexels-tembela-bohle-1884584.jpg";

const HomePage = () => {
  return (
    <section>
      <div className="relative">
        <img alt="Image of clothes" src={mainImg} className="h-full" />
        <div className="h-fit max-w-[500px] bg-grey-normal rounded-lg absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] md:p-10 p-4">
          <h1 className="lg:text-xl font-bold text-xs sm:text-sm md:text-lg">
            Crafting unique styles tailored just for you - because fashion is
            more than just clothing, it's an expression of individuality.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
