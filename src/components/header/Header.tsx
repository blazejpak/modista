import HeaderPhone from "./HeaderPhone";
import HeaderBiggerScreens from "./HeaderBiggerScreens";
import { useLayoutEffect, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handlerResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handlerResize);
    handlerResize();

    return () => window.removeEventListener("resize", handlerResize);
  }, []);

  return (
    <header className="sticky top-0 z-20  w-full select-none  bg-black-lighter  text-grey-normal">
      {isMobile ? <HeaderPhone /> : <HeaderBiggerScreens />}
    </header>
  );
};

export default Header;
