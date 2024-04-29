import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/logo-no-background.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiShoppingCart } from "react-icons/pi";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

import { IoClose } from "react-icons/io5";

import { ROUTES } from "../../utils/routes";
import HeaderPhoneLinks from "./HeaderPhoneLinks";
import { FaSearch } from "react-icons/fa";
import SearchInput from "../../routes/Search/SearchInput";

const HeaderPhone = () => {
  const navigate = useNavigate();
  const [searchInputClicked, setSearchInputClicked] = useState<boolean>(false);

  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string>("");

  const handleToggle = (activeItem: string) => {
    setActiveMenuItem(activeItem);
  };

  const menClicked = activeMenuItem === "men";
  const womenClicked = activeMenuItem === "women";
  const accessoriesClicked = activeMenuItem === "accessories";

  if (burgerClicked) document.documentElement.style.overflowY = "hidden";
  else document.documentElement.style.overflowY = "auto";

  const showInputHandle = () => {
    setSearchInputClicked((prev) => !prev);
  };

  const closeSearchInput = () => {
    setSearchInputClicked(false);
  };

  return (
    <nav className="flex  h-full items-center justify-between gap-8  ">
      <GiHamburgerMenu
        size={24}
        className="ml-8 cursor-pointer transition-colors hover:text-gold-lighter"
        onClick={() => {
          setBurgerClicked(true);
        }}
      />
      {burgerClicked && (
        <div className="absolute top-[0]  z-[1000] flex  h-screen w-full justify-center bg-black-lighter ">
          <IoClose
            size={30}
            className="hover-link absolute right-4 top-4 cursor-pointer text-grey-normal transition-all active:scale-110"
            onClick={() => {
              setBurgerClicked(false);
              setActiveMenuItem("");
            }}
          />

          <ul className="absolute top-[20%] flex flex-col items-center gap-4 text-3xl uppercase">
            <li className="flex flex-col">
              <div
                className="hover-link flex cursor-pointer items-center justify-center gap-2 p-4 transition-colors  "
                onClick={() => handleToggle("men")}
              >
                <p className="first-letter:uppercase">men</p>
                {menClicked ? <HiMinus size={24} /> : <HiPlus size={24} />}
              </div>
              {menClicked && (
                <HeaderPhoneLinks
                  typeLink="men"
                  closeMenu={setBurgerClicked}
                  clearClicked={setActiveMenuItem}
                />
              )}
            </li>
            <li className="flex flex-col">
              <div
                className="hover-link flex cursor-pointer items-center justify-center gap-2 p-2 transition-colors "
                onClick={() => handleToggle("women")}
              >
                <p className="first-letter:uppercase">women</p>
                {womenClicked ? <HiMinus size={24} /> : <HiPlus size={24} />}
              </div>
              {womenClicked && (
                <HeaderPhoneLinks
                  typeLink="women"
                  closeMenu={setBurgerClicked}
                  clearClicked={setActiveMenuItem}
                />
              )}
            </li>
            <li className="flex flex-col">
              <div
                className="hover-link flex cursor-pointer items-center justify-center gap-2 p-2 transition-colors "
                onClick={() => handleToggle("accessories")}
              >
                <p className="first-letter:uppercase">accessories</p>
                {accessoriesClicked ? (
                  <HiMinus size={24} />
                ) : (
                  <HiPlus size={24} />
                )}
              </div>
              {accessoriesClicked && (
                <HeaderPhoneLinks
                  typeLink="accessories"
                  closeMenu={setBurgerClicked}
                  clearClicked={setActiveMenuItem}
                />
              )}
            </li>
          </ul>
        </div>
      )}
      {!searchInputClicked ? (
        <NavLink
          to={ROUTES.HOMEPAGE}
          className="transition-all active:scale-110"
        >
          <img alt="Logo" src={logo} height={60} width={160} />
        </NavLink>
      ) : (
        <SearchInput closeInput={closeSearchInput} />
      )}

      <div className="flex items-center  gap-4">
        {!searchInputClicked && (
          <div onClick={showInputHandle} className="cursor-pointer ">
            <FaSearch size={16} />
          </div>
        )}
        <PiShoppingCart
          onClick={() => navigate(ROUTES.CART)}
          size={24}
          className="hover-link mr-8 cursor-pointer transition-all  active:scale-110"
        />
      </div>
    </nav>
  );
};

export default HeaderPhone;
