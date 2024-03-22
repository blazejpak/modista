import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo-no-background.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiShoppingCart } from "react-icons/pi";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

import { IoClose } from "react-icons/io5";

import ROUTES from "../../utils/routes";
import HeaderPhoneLinks from "./HeaderPhoneLinks";

const HeaderPhone = () => {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  const [menClicked, setMenClicked] = useState<boolean>(false);
  const [womenClicked, setWomenClicked] = useState<boolean>(false);
  const [accessoriesClicked, setAccessoriesClicked] = useState<boolean>(false);

  const menClickedHandle = () => {
    setMenClicked((prevState) => !prevState);

    setWomenClicked(false);
    setAccessoriesClicked(false);
  };

  const womenClickedHandle = () => {
    setWomenClicked((prevState) => !prevState);

    setMenClicked(false);
    setAccessoriesClicked(false);
  };

  const accessoriesClickedHandle = () => {
    setAccessoriesClicked((prevState) => !prevState);

    setMenClicked(false);
    setWomenClicked(false);
  };

  return (
    <nav className="flex h-full items-center justify-between gap-8  ">
      <GiHamburgerMenu
        size={24}
        className="ml-8 cursor-pointer transition-colors hover:text-gold-lighter"
        onClick={() => setBurgerClicked((prevState) => !prevState)}
      />
      {burgerClicked && (
        <div className="absolute top-[0] z-10 flex  h-screen w-full justify-center bg-black-lighter ">
          <IoClose
            size={30}
            className="hover-link absolute right-4 top-4 cursor-pointer text-grey-normal transition-all active:scale-110"
            onClick={() => {
              setBurgerClicked(false);
              setMenClicked(false);
              setWomenClicked(false);
              setAccessoriesClicked(false);
            }}
          />

          <ul className="absolute top-[20%] flex flex-col items-center gap-4 text-3xl">
            <li className="flex flex-col">
              <div
                className="hover-link flex cursor-pointer items-center justify-center gap-2 p-4 transition-colors  "
                onClick={menClickedHandle}
              >
                <p className="first-letter:uppercase">men</p>
                {menClicked ? <HiMinus size={24} /> : <HiPlus size={24} />}
              </div>
              {menClicked && (
                <HeaderPhoneLinks typeLink="men" closeMenu={setBurgerClicked} />
              )}
            </li>
            <li className="flex flex-col">
              <div
                className="hover-link flex cursor-pointer items-center justify-center gap-2 p-2 transition-colors "
                onClick={womenClickedHandle}
              >
                <p className="first-letter:uppercase">women</p>
                {womenClicked ? <HiMinus size={24} /> : <HiPlus size={24} />}
              </div>
              {womenClicked && (
                <HeaderPhoneLinks
                  typeLink="women"
                  closeMenu={setBurgerClicked}
                />
              )}
            </li>
            <li className="flex flex-col">
              <div
                className="hover-link flex cursor-pointer items-center justify-center gap-2 p-2 transition-colors "
                onClick={accessoriesClickedHandle}
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
                />
              )}
            </li>
          </ul>
        </div>
      )}
      <NavLink to={ROUTES.HOMEPAGE} className="transition-all active:scale-110">
        <img alt="Logo" src={logo} height={60} width={160} />
      </NavLink>
      <PiShoppingCart
        size={24}
        className="hover-link mr-8 cursor-pointer transition-all  active:scale-110"
      />
    </nav>
  );
};

export default HeaderPhone;
