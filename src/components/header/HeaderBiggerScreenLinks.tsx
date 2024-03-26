import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/routes";

type typeLink = {
  typeLink: keyof typeof navLinks;
};

const HeaderBiggerScreenLinks = ({ typeLink }: typeLink) => {
  const links = navLinks[typeLink];

  if (!links || !links.length) {
    return <div>Can't find a link called {typeLink}</div>;
  } else {
    return (
      <div className="absolute left-0 top-[100%] z-10 flex h-fit w-full flex-col items-center gap-2 rounded-b-md bg-black-lighter p-8 text-xl">
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

export default HeaderBiggerScreenLinks;
