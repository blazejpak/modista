import { NavLink } from "react-router-dom";

import { PiShoppingCart } from "react-icons/pi";
import logo from "../../assets/logo-no-background.png";

import ROUTES from "../../utils/routes";

const HeaderBiggerScreens = () => {
  return (
    <nav className="h-full items-center flex justify-between px-[10%]">
      <NavLink to={ROUTES.HOME} className="active:scale-110 transition-all">
        <img alt="Logo" src={logo} height={60} width={160} />
      </NavLink>
      <ul className="flex gap-4 h-full items-center">
        <li className="hover-link active:scale-110 transition-all">
          <NavLink to={ROUTES.MEN}>Men</NavLink>
        </li>
        <li className="hover-link active:scale-110 transition-all">
          <NavLink to={ROUTES.WOMEN}>Women</NavLink>
        </li>
        <li className="hover-link active:scale-110 transition-all">
          <NavLink to={ROUTES.ACCESSORIES}>Accessories</NavLink>
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
