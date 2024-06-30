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
          w-[80%] h-screen bg-slate-300
          transition-transform duration-300 transform
          ${isOpenMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Links</li>
        </ul>
      </div>
    </>
  );
}
