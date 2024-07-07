import { Link } from "react-scroll";
type PropsType = {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Menu({ isOpenMenu, setIsOpenMenu }: PropsType) {
  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={`
          fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-80 cursor-pointer
          ${isOpenMenu ? "block" : "hidden"}
        `}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      />
      <div
        className={`
          w-[70%] h-screen bg-gradient-to-bl from-blue-300 to-blue-100
          transition-transform duration-300 transform
          ${isOpenMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="flex flex-col justify-around items-center h-full px-10">
          <li className="w-full pb-20 border-b-2 border-gray-100">
            <span className="block w-40 mx-auto p-2 text-center bg-gradient-to-r from-blue-400 to-blue-100 text-3xl text-white tracking-wider border-4 border-solid border-white">
              <Link
                to="about"
                offset={-80}
                smooth={true}
                className="block cursor-pointer"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                About
              </Link>
            </span>
          </li>
          <li className="w-full pb-20 border-b-2 border-gray-100">
            <span className="block w-40 mx-auto p-2 text-center bg-gradient-to-r from-blue-400 to-blue-100 text-3xl text-white tracking-wider border-4 border-solid border-white">
              <Link
                to="skill"
                offset={-80}
                smooth={true}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="block cursor-pointer"
              >
                Skill
              </Link>
            </span>
          </li>
          <li className="w-full">
            <span className="block w-40 mx-auto p-2 text-center bg-gradient-to-r from-blue-400 to-blue-100 text-3xl text-white tracking-wider border-4 border-solid border-white">
              <Link
                to="links"
                offset={-80}
                smooth={true}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="block cursor-pointer"
              >
                Links
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
