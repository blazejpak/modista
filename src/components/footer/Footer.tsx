import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import logo from "../../assets/logo-no-background.png";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";

const Footer = () => {
  return (
    <footer className="bg-black-lighter text-grey-normal flex flex-col gap-8 py-8 px-[10%] lg:flex-row lg:gap-24">
      <div className="flex flex-col gap-8">
        <Link to={ROUTES.HOMEPAGE}>
          <img alt="logo" src={logo} height={90} width={130} />
        </Link>
        <p className="text-xs opacity-50">
          Welcome to our fashion boutique! Explore our curated selection of
          trendy apparel for men and women. From everyday essentials to
          statement pieces, we offer the latest styles to help you express your
          unique personality. Find the perfect outfit for any occasion and
          elevate your wardrobe with our stylish collection.
        </p>
      </div>
      <div className="flex justify-between items-center gap-6 lg:gap-0 flex-col-reverse sm:flex-row lg:flex-col lg:justify-around">
        <p className="text-xs opacity-50">
          Copyright 2024. All Rights Reserved
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/blazejpak"
            className="cursor-pointer w-6 block"
            aria-label="Facebook link"
          >
            <AiFillFacebook
              size={24}
              className="transition-colors duration-500 hover:fill-orange-600"
            />
          </a>
          <a
            href="https://github.com/blazejpak"
            className="cursor-pointer w-6 block"
            aria-label="Twitter link"
          >
            <AiFillTwitterCircle
              size={24}
              className="transition-colors duration-500 hover:fill-orange-600"
            />
          </a>
          <a
            href="https://github.com/blazejpak"
            className="cursor-pointer w-6 block"
            aria-label="Instagram link"
          >
            <AiFillInstagram
              size={24}
              className="transition-colors duration-500 hover:fill-orange-600"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
