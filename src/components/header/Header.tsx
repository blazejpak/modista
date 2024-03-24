import HeaderPhone from "./HeaderPhone";
import HeaderBiggerScreens from "./HeaderBiggerScreens";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    const handlerResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handlerResize);
    handlerResize();

    return () => window.removeEventListener("resize", handlerResize);
  }, []);
  return (
    <header className="sticky top-0 z-10  w-full select-none  bg-black-lighter  text-grey-normal">
      {isMobile ? <HeaderPhone /> : <HeaderBiggerScreens />}
    </header>
  );
};

export default Header;
