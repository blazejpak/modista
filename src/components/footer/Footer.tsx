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
    <footer className="flex h-[300px] flex-col gap-8 bg-black-lighter px-[10%] py-8 text-grey-normal lg:h-[200px] lg:flex-row lg:gap-24">
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
      <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row lg:flex-col lg:justify-around lg:gap-0">
        <p className="text-xs opacity-50">
          Copyright 2024. All Rights Reserved
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/blazejpak"
            className="block w-6 cursor-pointer"
            aria-label="Facebook link"
          >
            <AiFillFacebook
              size={24}
              className="transition-colors duration-500 hover:fill-gold-dark active:fill-gold-lighter"
            />
          </a>
          <a
            href="https://github.com/blazejpak"
            className="block w-6 cursor-pointer"
            aria-label="Twitter link"
          >
            <AiFillTwitterCircle
              size={24}
              className="transition-colors duration-500 hover:fill-gold-dark active:fill-gold-lighter"
            />
          </a>
          <a
            href="https://github.com/blazejpak"
            className="block w-6 cursor-pointer"
            aria-label="Instagram link"
          >
            <AiFillInstagram
              size={24}
              className="transition-colors duration-500 hover:fill-gold-dark active:fill-gold-lighter"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
