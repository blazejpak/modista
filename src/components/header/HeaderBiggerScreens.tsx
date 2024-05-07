import { NavLink } from "react-router-dom";

import logo from "../../assets/logo-no-background.png";
import { FaSearch } from "react-icons/fa";

import { ROUTES } from "../../utils/routes";
import { useState } from "react";
import HeaderBiggerScreenLinks from "./HeaderBiggerScreenLinks";
import SearchInput from "../../routes/Search/SearchInput";
<<<<<<< HEAD
import CartButton from "../../routes/Cart/CartButton";

const HeaderBiggerScreens = () => {
  const [searchInputClicked, setSearchInputClicked] = useState<boolean>(false);
=======
import CartOnHover from "../../routes/Cart/CartOnHover";

const HeaderBiggerScreens = () => {
  const [searchInputActive, setSearchInputActive] = useState(false);
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
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
<<<<<<< HEAD
    setSearchInputClicked((prev) => !prev);
  };

  const closeSearchInput = () => {
    setSearchInputClicked(false);
=======
    setSearchInputActive((prev) => !prev);
  };

  const closeSearchInput = () => {
    setSearchInputActive(false);
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
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
<<<<<<< HEAD
      {!searchInputClicked ? (
=======
      {!searchInputActive ? (
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
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
<<<<<<< HEAD
        {!searchInputClicked && (
          <div onClick={showInputHandle} className="cursor-pointer ">
            <FaSearch size={16} />
          </div>
        )}
        <CartButton />
=======
        {!searchInputActive && (
          <button onClick={showInputHandle} className="cursor-pointer ">
            <FaSearch size={16} />
          </button>
        )}
        <CartOnHover />
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
      </div>
    </nav>
  );
};

export default HeaderBiggerScreens;
