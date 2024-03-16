import mainImg from "../assets/pexels-primary-image.webp";
import manImg from "../assets/pexels-man.webp";
import womanImg from "../assets/pexels-woman.webp";
import homeImg from "../assets/pexels-home.webp";

const HomePage = () => {
  return (
    <section>
      <div className="relative">
        <img alt="Image of clothes" src={mainImg} className="w-full bg-cover" />
        <div className="h-fit max-w-[500px] bg-grey-normal rounded-lg absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] md:p-10 p-4">
          <h1 className="lg:text-xl font-bold text-xs sm:text-sm md:text-lg">
            Crafting unique styles tailored just for you - because fashion is
            more than just clothing, it's an expression of individuality.
          </h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1">
        <img alt="Image of man" src={manImg} height={300} />
        <img alt="Image of woman" src={womanImg} height={300} />
        <img alt="Image of home decorations" src={homeImg} height={300} />
      </div>
    </section>
  );
};

export default HomePage;
