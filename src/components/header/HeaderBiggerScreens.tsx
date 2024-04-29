import { NavLink } from "react-router-dom";

import logo from "../../assets/logo-no-background.png";
import { FaSearch } from "react-icons/fa";

import { ROUTES } from "../../utils/routes";
import { useState } from "react";
import HeaderBiggerScreenLinks from "./HeaderBiggerScreenLinks";
import CartOnHover from "../../routes/Cart/CartOnHover";
import SearchInput from "../../routes/Search/SearchInput";

const HeaderBiggerScreens = () => {
  const [searchInputClicked, setSearchInputClicked] = useState<boolean>(false);
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

  const showInputHandle = () => {
    setSearchInputClicked((prev) => !prev);
  };

  const closeSearchInput = () => {
    setSearchInputClicked(false);
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
    <nav className="flex h-full items-center justify-between px-[5%] text-xl font-bold lg:px-[10%]">
      <NavLink
        to={ROUTES.HOMEPAGE}
        className="min-w-40 transition-all active:scale-110"
      >
        <img alt="Logo" src={logo} height={60} width={160} />
      </NavLink>
      {!searchInputClicked ? (
        <ul className="relative  flex h-full items-center px-4">
          {categories.map(({ label, route, typeLink }) => (
            <li
              className="flex h-full items-center px-4 lg:px-8"
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
      ) : (
        <SearchInput closeInput={closeSearchInput} />
      )}
      <div className="flex items-center  gap-4">
        {!searchInputClicked && (
          <div onClick={showInputHandle} className="cursor-pointer ">
            <FaSearch size={16} />
          </div>
        )}
        <CartOnHover />
      </div>
    </nav>
  );
};

export default HeaderBiggerScreens;
