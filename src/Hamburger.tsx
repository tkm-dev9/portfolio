import Menu from "./Menu";
import { useEffect, useState } from "react";

export default function Hamburger() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenMenu]);

  return (
    <>
      <button
        type="button"
        className="absolute top-0 right-0 block w-20 h-full px-5 cursor-pointer group"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <span className="block w-full h-1 mb-2 bg-black group-hover:mb-1 transition-margin duration-300" />
        <span className="block w-full h-1 mb-2 bg-black group-hover:mb-1 transition-margin duration-300" />
        <span className="block w-full h-1 bg-black" />
      </button>
      <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </>
  );
}
