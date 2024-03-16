import { NavLink } from "react-router-dom";
import ROUTES from "../../utils/routes";

type typeLink = {
  typeLink: string;
};

const HeaderPhoneLinks = ({ typeLink }: typeLink) => {
  if (typeLink === "men") {
    return (
      <div className="text-xl flex flex-col gap-1 items-center ">
        <NavLink className="hover-link transition-colors" to={ROUTES.MEN}>
          All
        </NavLink>
        <NavLink
          className="hover-link transition-colors"
          to={ROUTES.MEN_SHIRTS}
        >
          Shirts
        </NavLink>
        <NavLink className="hover-link transition-colors" to={ROUTES.MEN_SHOES}>
          Shoes
        </NavLink>
        <NavLink
          className="hover-link transition-colors"
          to={ROUTES.MEN_WATCHES}
        >
          Watches
        </NavLink>
      </div>
    );
  } else if (typeLink === "women") {
    return (
      <div className="text-xl flex flex-col gap-1 items-center ">
        <NavLink className="hover-link transition-colors" to={ROUTES.WOMEN}>
          All
        </NavLink>
        <NavLink
          className="hover-link transition-colors"
          to={ROUTES.WOMEN_TOPS}
        >
          Tops
        </NavLink>
        <NavLink
          className="hover-link transition-colors"
          to={ROUTES.WOMEN_DRESSES}
        >
          Dresses
        </NavLink>
        <NavLink
          className="hover-link transition-colors"
          to={ROUTES.WOMEN_SHOES}
        >
          Shoes
        </NavLink>
        <NavLink
          className="hover-link transition-colors"
          to={ROUTES.WOMEN_WATCHES}
        >
          Watches
        </NavLink>
      </div>
    );
  } else if (typeLink === "accessories") {
    return (
      <div className="text-xl flex flex-col gap-1 items-center ">
        <NavLink className="hover-link transition-colors" to={ROUTES.MEN}>
          All
        </NavLink>
        <NavLink
          className="hover-link transition-colors"
          to={ROUTES.HOME_DECORATIONS}
        >
          Decorations
        </NavLink>
        <NavLink
          className="hover-link transition-colors"
          to={ROUTES.HOME_FURNITURE}
        >
          Furniture
        </NavLink>
      </div>
    );
  } else {
    return <div>Can't find a link called {typeLink}</div>;
  }
};

export default HeaderPhoneLinks;
