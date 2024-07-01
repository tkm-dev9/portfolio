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
          w-[70%] h-screen bg-slate-300
          transition-transform duration-300 transform
          ${isOpenMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="flex flex-col justify-around items-center h-full">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <li
            className="text-5xl border-b-4 border-sky-900"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <a href="#about" className="block pb-2">
              About
            </a>
          </li>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <li
            className="text-5xl border-b-4 border-sky-900"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <a href="#skill" className="block pb-2">
              Skill
            </a>
          </li>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <li
            className="text-5xl border-b-4 border-sky-900"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <a href="#links" className="block pb-2">
              Links
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
