import { NavLink } from "react-router-dom";

import { PiShoppingCart } from "react-icons/pi";
import logo from "../../assets/logo-no-background.png";

import ROUTES from "../../utils/routes";
import { useState } from "react";
import HeaderBiggerScreenLinks from "./HeaderBiggerScreenLinks";

const HeaderBiggerScreens = () => {
  const [isHover, setIsHover] = useState();
  const [menHover, setMenHover] = useState<boolean>(false);
  const [womenHover, setWomenHover] = useState<boolean>(false);
  const [accessoriesHover, setAccessoriesHover] = useState<boolean>(false);

  const navMenMouseOver = () => {
    setMenHover(true);
  };
  const navWomenMouseOver = () => {
    setWomenHover(true);
  };
  const navAccessoriesMouseOver = () => {
    setAccessoriesHover(true);
  };

  const navMouseOut = () => {
    setMenHover(false);
    setWomenHover(false);
    setAccessoriesHover(false);
  };

  return (
    <nav className="flex h-full items-center justify-between px-[10%] text-xl font-bold">
      <NavLink to={ROUTES.HOMEPAGE} className="transition-all active:scale-110">
        <img alt="Logo" src={logo} height={60} width={160} />
      </NavLink>
      <ul className="relative  flex h-full items-center px-4">
        <li
          className="flex h-full items-center px-8"
          onMouseOver={navMenMouseOver}
          onMouseOut={navMouseOut}
        >
          <NavLink
            to={ROUTES.MEN}
            className="hover-link transition-all active:scale-110 "
          >
            Men
          </NavLink>
          {menHover && <HeaderBiggerScreenLinks typeLink="men" />}
        </li>
        <li
          className="flex h-full items-center px-8"
          onMouseOver={navWomenMouseOver}
          onMouseOut={navMouseOut}
        >
          <NavLink
            to={ROUTES.WOMEN}
            className="hover-link transition-all active:scale-110 "
          >
            Women
          </NavLink>
          {womenHover && <HeaderBiggerScreenLinks typeLink="women" />}
        </li>
        <li
          className=" flex h-full items-center px-8"
          onMouseOver={navAccessoriesMouseOver}
          onMouseOut={navMouseOut}
        >
          <NavLink
            to={ROUTES.ACCESSORIES}
            className="hover-link transition-all active:scale-110 "
          >
            Accessories
          </NavLink>
          {accessoriesHover && (
            <HeaderBiggerScreenLinks typeLink="accessories" />
          )}
        </li>
      </ul>
      <PiShoppingCart
        size={24}
        className="hover-link cursor-pointer transition-all  active:scale-110"
      />
    </nav>
  );
};

export default HeaderBiggerScreens;
