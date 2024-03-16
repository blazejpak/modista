import { NavLink } from "react-router-dom";

import { PiShoppingCart } from "react-icons/pi";
import logo from "../../assets/logo-no-background.png";

import ROUTES from "../../utils/routes";
import { useState } from "react";
import HeaderBiggerScreenLinks from "./HeaderBiggerScreenLinks";

const HeaderBiggerScreens = () => {
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
    <nav className="h-full items-center flex justify-between px-[10%] text-xl font-bold">
      <NavLink to={ROUTES.HOMEPAGE} className="active:scale-110 transition-all">
        <img alt="Logo" src={logo} height={60} width={160} />
      </NavLink>
      <ul className="flex  h-full items-center relative px-4">
        <li
          className="h-full flex items-center px-8"
          onMouseOver={navMenMouseOver}
          onMouseOut={navMouseOut}
        >
          <NavLink
            to={ROUTES.MEN}
            className="hover-link active:scale-110 transition-all "
          >
            Men
          </NavLink>
          {menHover && <HeaderBiggerScreenLinks typeLink="men" />}
        </li>
        <li
          className="px-8 h-full flex items-center"
          onMouseOver={navWomenMouseOver}
          onMouseOut={navMouseOut}
        >
          <NavLink
            to={ROUTES.WOMEN}
            className="hover-link active:scale-110 transition-all "
          >
            Women
          </NavLink>
          {womenHover && <HeaderBiggerScreenLinks typeLink="women" />}
        </li>
        <li
          className=" px-8 h-full flex items-center"
          onMouseOver={navAccessoriesMouseOver}
          onMouseOut={navMouseOut}
        >
          <NavLink
            to={ROUTES.ACCESSORIES}
            className="hover-link active:scale-110 transition-all "
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
        className="active:scale-110 transition-all hover-link  cursor-pointer"
      />
    </nav>
  );
};

export default HeaderBiggerScreens;
