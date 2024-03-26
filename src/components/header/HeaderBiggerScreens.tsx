import { NavLink } from "react-router-dom";

import { PiShoppingCart } from "react-icons/pi";
import logo from "../../assets/logo-no-background.png";

import ROUTES, { CATEGORIES, Category } from "../../utils/routes";
import { useState } from "react";
import HeaderBiggerScreenLinks from "./HeaderBiggerScreenLinks";

const HeaderBiggerScreens = () => {
  const [hoverState, setHoverState] = useState<null | Category>(null);

  const navMouseOut = () => {
    setHoverState(null);
  };

  const navMouseOver = (category: Category) => {
    console.log("hover " + category);
    setHoverState(category);
  };

  type Categories = {
    label: string;
    route: string;
    typeLink: string;
  };
  const categories: Categories[] = [
    { label: "Men", route: ROUTES.MEN, typeLink: CATEGORIES.men },
    { label: "Women", route: ROUTES.WOMEN, typeLink: CATEGORIES.women },
    {
      label: "Accessories",
      route: ROUTES.ACCESSORIES,
      typeLink: CATEGORIES.accessories,
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
            onMouseOver={() => navMouseOver(typeLink as Category)}
            onMouseOut={navMouseOut}
            key={label}
          >
            <NavLink
              to={route}
              className="hover-link transition-all active:scale-110 "
            >
              {label}
            </NavLink>
            {hoverState === typeLink && (
              <HeaderBiggerScreenLinks typeLink={typeLink} />
            )}
          </li>
        ))}
      </ul>
      <PiShoppingCart
        size={24}
        className="hover-link cursor-pointer transition-all  active:scale-110"
      />
    </nav>
  );
};

export default HeaderBiggerScreens;
