import logo from "../../assets/Media/logo dark.png";
import { HiArrowUpRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="scale-100 rounded-2xl px-3 py-2 ">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="flex items-center justify-between gap-6 text-slate-900">
          <li className="cursor-pointer rounded-full font-bold px-1 py-2">
            Home
          </li>
          <li className="cursor-pointer rounded-full font-bold px-1 py-2">
            Service
          </li>
          <li className="cursor-pointer rounded-full font-bold px-1 py-2">
            Blog
          </li>
          <li className="cursor-pointer rounded-full font-bold px-1 py-2">
            About US
          </li>
        </ul>
        <div>
          <div className="flex rounded-2xl border-2 border-black px-5 py-3 text-xl duration-200 hover:bg-orange-400">
            Appointment <span><HiArrowUpRight className="mt-1 ml-1"/></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
