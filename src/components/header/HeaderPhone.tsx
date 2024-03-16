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
    <nav className="h-full flex items-center gap-8 justify-between  ">
      <GiHamburgerMenu
        size={24}
        className="hover:text-gold-lighter ml-8 transition-colors cursor-pointer"
        onClick={() => setBurgerClicked((prevState) => !prevState)}
      />
      {burgerClicked && (
        <div className="top-[0] bg-black-lighter flex justify-center  w-full h-screen z-10 absolute ">
          <IoClose
            size={30}
            className="absolute top-4 right-4 cursor-pointer hover-link active:scale-110 transition-all text-grey-normal"
            onClick={() => {
              setBurgerClicked(false);
              setMenClicked(false);
              setWomenClicked(false);
              setAccessoriesClicked(false);
            }}
          />

          <ul className="flex flex-col gap-4 top-[20%] items-center absolute text-3xl">
            <li className="flex flex-col">
              <div
                className="flex gap-2 cursor-pointer p-4 items-center justify-center hover-link transition-colors  "
                onClick={menClickedHandle}
              >
                <p className="first-letter:uppercase">men</p>
                {menClicked ? <HiMinus size={24} /> : <HiPlus size={24} />}
              </div>
              {menClicked && <HeaderPhoneLinks typeLink="men" />}
            </li>
            <li className="flex flex-col">
              <div
                className="flex gap-2 cursor-pointer p-2 items-center justify-center hover-link transition-colors "
                onClick={womenClickedHandle}
              >
                <p className="first-letter:uppercase">women</p>
                {womenClicked ? <HiMinus size={24} /> : <HiPlus size={24} />}
              </div>
              {womenClicked && <HeaderPhoneLinks typeLink="women" />}
            </li>
            <li className="flex flex-col">
              <div
                className="flex gap-2 cursor-pointer p-2 items-center justify-center hover-link transition-colors "
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
                <HeaderPhoneLinks typeLink="accessories" />
              )}
            </li>
          </ul>
        </div>
      )}
      <NavLink to={ROUTES.HOME} className="active:scale-110 transition-all">
        <img alt="Logo" src={logo} height={60} width={160} />
      </NavLink>
      <PiShoppingCart
        size={24}
        className="active:scale-110 mr-8 transition-all hover-link  cursor-pointer"
      />
    </nav>
  );
};

export default HeaderPhone;
