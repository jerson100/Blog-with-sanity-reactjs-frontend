import { useEffect, useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Logo from "../Logo";
import MenuMobile from "../MenuMobile";
import MainHeaderActions from "./components/MainHeaderActions";
import MainHeaderNavigation from "./components/MainHeaderNavigation";

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const matchTablet: boolean = useMediaQuery("(min-width: 768px)");
  const handleShowMenu = (): void => {
    setShowMenu((prev: boolean) => !prev);
  };
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-y-hidden");
    }
  }, [showMenu]);

  useEffect(() => {
    if (matchTablet) {
      document.body.classList.remove("overflow-y-hidden");
      setShowMenu(false);
    }
  }, [matchTablet]);

  return (
    <header className="border-b border-solid border-zinc-200 fixed left-0 top-0 bg-white w-full z-30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center h-16 justify-between md:justify-start gap-4 lg:gap-8">
          <h1 className="basis-1/6 lg:flex-shrink-0">
            <span className="h-1 w-1 hidden">Reuters Home</span>
            <Logo className="lg:w-40" />
          </h1>
          <MainHeaderNavigation />
          <MainHeaderActions handleShow={handleShowMenu} />
          <MenuMobile show={showMenu} />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
