import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/routes";

type typeLink = {
  typeLink: keyof typeof navLinks;
};

const HeaderPhoneLinks = ({ typeLink }: typeLink) => {
  const links = navLinks[typeLink];

  if (!links || !links.length) {
    return <div>Can't find a link called {typeLink}</div>;
  } else {
    return (
      <div className="flex flex-col items-center gap-1 text-xl ">
        {links.map(({ link, label }) => (
          <NavLink
            className="hover-link transition-colors"
            to={link}
            key={link}
          >
            {label}
          </NavLink>
        ))}
      </div>
    );
  }
};

export default HeaderPhoneLinks;
