import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/routes";

type typeLink = {
  typeLink: keyof typeof navLinks;
  closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
  clearClicked: React.Dispatch<React.SetStateAction<string>>;
};

const HeaderPhoneLinks = ({ typeLink, closeMenu, clearClicked }: typeLink) => {
  const links = navLinks[typeLink];

  console.log();
  

  if (!links || !links.length) {
    return <div>Can't find a link called {typeLink}</div>;
  } else {
    return (
      <div className="flex flex-col items-center gap-1 text-xl ">
        {links.map(({ link, label }) => (
          <NavLink
            className="hover-link uppercase transition-colors"
            to={link}
            key={link}
            onClick={() => {
              closeMenu(false);
              clearClicked("");
            }}
          >
            {label}
          </NavLink>
        ))}
      </div>
    );
  }
};

export default HeaderPhoneLinks;
