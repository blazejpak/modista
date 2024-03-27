import manImg from "../../assets/man.webp";
import womanImg from "../../assets/woman.webp";
import homeImg from "../../assets/accessories.webp";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";

const LinksImages = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-3 ">
      <div className="group relative">
        <img
          alt="Image of man"
          src={manImg}
          height={600}
          className="grayscale group-hover:grayscale-0"
        />
        <div className="absolute bottom-10 left-[50%] translate-x-[-50%] cursor-pointer rounded bg-grey-lighter p-2 text-center text-sm uppercase lg:p-3 lg:text-base">
          <Link to={ROUTES.MEN}>for him</Link>
        </div>
      </div>
      <div className="group relative">
        <img
          alt="Image of woman"
          src={womanImg}
          height={600}
          className="grayscale transition-all group-hover:grayscale-0"
        />
        <div className="absolute bottom-10 left-[50%] translate-x-[-50%] cursor-pointer rounded bg-grey-lighter p-2 text-center text-sm uppercase lg:p-3 lg:text-base">
          <Link to={ROUTES.WOMEN}>for her</Link>
        </div>
      </div>
      <div className="group relative">
        <img
          alt="Image of home decorations"
          src={homeImg}
          height={600}
          className="grayscale transition-all group-hover:grayscale-0"
        />
        <div className="absolute bottom-10 left-[50%] translate-x-[-50%] cursor-pointer rounded bg-grey-lighter p-2 text-center text-sm uppercase lg:p-3 lg:text-base">
          <Link to={ROUTES.ACCESSORIES}>Accessories </Link>
        </div>
      </div>
    </div>
  );
};

export default LinksImages;
