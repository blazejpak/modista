import { NavLink } from "react-router-dom";

import { PiShoppingCart } from "react-icons/pi";
import logo from "../../assets/logo-no-background.png";

import ROUTES from "../../utils/routes";
import { useState } from "react";
import HeaderBiggerScreenLinks from "./HeaderBiggerScreenLinks";

const HeaderBiggerScreens = () => {
  const [hoverState, setHoverState] = useState({
    men: false,
    women: false,
    accessories: false,
  });

  const navMouseOut = () => {
    setHoverState({
      men: false,
      women: false,
      accessories: false,
    });
  };

  const navMouseOver = (category: string) => {
    setHoverState((prevState) => ({
      ...prevState,
      [category]: true,
    }));
  };

  type Categories = {
    label: string;
    route: string;
    typeLink: "men" | "women" | "accessories";
  };
  const categories: Categories[] = [
    { label: "Men", route: ROUTES.MEN, typeLink: "men" },
    { label: "Women", route: ROUTES.WOMEN, typeLink: "women" },
    {
      label: "Accessories",
      route: ROUTES.ACCESSORIES,
      typeLink: "accessories",
    },
  ];

  return (
    <nav className="flex h-full items-center justify-between px-[10%] text-xl font-bold">
      <NavLink to={ROUTES.HOMEPAGE} className="transition-all active:scale-110">
        <img alt="Logo" src={logo} height={60} width={160} />
      </NavLink>
      <ul className="relative  flex h-full items-center px-4">
        {categories.map(({ label, route, typeLink }) => (
          <li
            className="flex h-full items-center px-8"
            onMouseOver={() => navMouseOver(typeLink)}
            onMouseOut={navMouseOut}
            key={label}
          >
            <NavLink
              to={route}
              className="hover-link transition-all active:scale-110 "
            >
              {label}
            </NavLink>
            {hoverState[typeLink] && (
              <HeaderBiggerScreenLinks typeLink={typeLink} />
            )}
          </li>
        ))}
      </ul>
      <div className=" group relative ">
        <div className="hover-link flex cursor-pointer  items-center  gap-1 transition-all active:scale-110">
          <PiShoppingCart size={24} />
          <p className="text-sm font-light">Cart</p>
        </div>

        <div className="absolute top-[105%] hidden  w-10 bg-yellow-300 group-hover:flex">
          <p>Text</p>
          <p>Text</p>
          <p>Text</p>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBiggerScreens;
