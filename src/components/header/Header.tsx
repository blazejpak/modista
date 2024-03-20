import HeaderPhone from "./HeaderPhone";
import HeaderBiggerScreens from "./HeaderBiggerScreens";
import { useLayoutEffect, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handlerResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handlerResize);
    handlerResize();

    return () => window.removeEventListener("resize", handlerResize);
  }, []);
  return (
    <header className="h-[90px] w-full select-none  bg-black-lighter  text-grey-normal">
      {isMobile ? <HeaderPhone /> : <HeaderBiggerScreens />}
    </header>
  );
};

export default Header;
