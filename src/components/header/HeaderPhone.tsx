import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo-no-background.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiShoppingCart } from "react-icons/pi";

import ROUTES from "../../utils/routes";

const HeaderPhone = () => {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);



  return (
    <nav className="h-full flex items-center gap-8 justify-between  ">
      <GiHamburgerMenu size={24} className="hover:text-gold-lighter ml-8 transition-colors cursor-pointer" onClick={()=>setBurgerClicked(prevState=>!prevState)}/>
      {burgerClicked&& <ul className="flex gap-4 top-[0] items-center absolute w-full h-screen z-10 bg-black-lighter ">
        <li >
          <NavLink to={ROUTES.MEN}>Men</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.WOMEN}>Women</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ACCESSORIES}>Accessories</NavLink>
        </li>
      </ul>}
      <NavLink to={ROUTES.HOME} className="active:scale-110 transition-all">
        <img alt="Logo" src={logo} height={60} width={160} />
      </NavLink>
      <PiShoppingCart
        size={24}
        className="active:scale-110 mr-8 transition-all hover:text-gold-dark active:text-gold-lighter  cursor-pointer"
      />
    </nav>
  );
};

export default HeaderPhone;
