import { NavLink } from "react-router-dom";
import ROUTES from "../../utils/routes";

type typeLink = {
  typeLink: string;
};

const HeaderBiggerScreenLinks = ({ typeLink }: typeLink) => {
  if (typeLink === "men") {
    return (
      <div className="text-xl flex flex-col gap-1 left-0 items-center absolute top-[101%] h-fit w-full bg-black-lighter p-8 rounded-b-md z-10">
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
      <div className="text-xl flex flex-col gap-1 items-center absolute left-0 top-[101%] z-10 h-fit w-full bg-black-lighter p-8 rounded-b-md">
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
      <div className="text-xl flex flex-col gap-1 items-center absolute left-0 top-[101%] z-10 h-fit w-full bg-black-lighter p-8 rounded-b-md">
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

export default HeaderBiggerScreenLinks;
