import { Link } from "react-scroll";
type PropsType = {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const menuItems = [
  {
    text: "About",
    id: "about",
  },
  {
    text: "Skill",
    id: "skill",
  },
  {
    text: "Links",
    id: "links",
  },
];

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
          w-[70%] h-screen bg-blue-300
          transition-transform duration-300 transform
          ${isOpenMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="flex flex-col justify-around items-center h-full px-10">
          {menuItems.map((menuItem, index) => (
            <li
              className={`w-full pb-20 ${index !== menuItems.length - 1 ? "border-b-2 border-gray-100" : ""}`}
              key={menuItem.id}
            >
              <span className="block w-40 mx-auto p-2 text-center bg-blue-400 text-3xl text-white tracking-wider border-4 border-solid border-white">
                <Link
                  to={menuItem.id}
                  offset={-80}
                  smooth={true}
                  className="block cursor-pointer"
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                >
                  {menuItem.text}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
