import HeaderPhone from "./HeaderPhone";
import HeaderBiggerScreens from "./HeaderBiggerScreens";
import { useLayoutEffect, useState } from "react";

const Header = () => {
  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const handlerResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlerResize);
    handlerResize();

    return () => window.removeEventListener("resize", handlerResize);
  }, []);
  return (
    <header className="w-full bg-black-lighter text-grey-normal  h-[90px] border-b-2 border-grey-normal">
      {width < 768 ? <HeaderPhone /> : <HeaderBiggerScreens />}
    </header>
  );
};

export default Header;
