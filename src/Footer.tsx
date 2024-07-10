import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="relative w-full h-20 bg-slate-400">
      <p className="text-center text-white">&copy; 2024 TAKUMU</p>
      <Link
        to="top"
        smooth={true}
        className="absolute top-1/2 right-10 -translate-y-1/2 flex justify-center items-center w-10 h-10 border-2 border-white rounded-full bg-blue-300 cursor-pointer transition-transform duration-300 ease-out hover:scale-150"
      >
        <span className="text-white">↑</span>
      </Link>
    </footer>
  );
}
