import Menu from "./Menu";
import { useState } from "react";

export default function Hamburger() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <button
        type="button"
        className="absolute top-0 right-5 block w-10 h-full cursor-pointer group"
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
