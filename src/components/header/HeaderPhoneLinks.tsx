import { NavLink } from "react-router-dom";
import ROUTES, { NavLinks } from "../../utils/routes";

type typeLink = {
  typeLink: keyof typeof NavLinks;
};

const HeaderPhoneLinks = ({ typeLink }: typeLink) => {
  const links = NavLinks[typeLink];

  if (!links || !links.length)
    return <div>Can't find a link called {typeLink}</div>;

  return (
    <div className="flex flex-col items-center gap-1 text-xl ">
      {links.map(({ link, label }) => (
        <NavLink className="hover-link transition-colors" to={link}>
          {label}
        </NavLink>
      ))}
    </div>
  );
};

export default HeaderPhoneLinks;
