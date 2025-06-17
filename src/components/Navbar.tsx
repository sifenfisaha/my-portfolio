import { Menu } from "lucide-react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="inert md:py-12 py-6 md:px-8 px-2 text-xl border-gray-300 border-2 border-b-0 underline decoration-[2px] pb-1 underline-offset-3">
      <nav className=" flex items-center justify-between  ">
        <ul className="md:flex hidden items-center justify-between w-full">
          <li className="flex items-center justify-center gap-10 ">
            <a className="cursor-pointer" href="#">
              About Me**
            </a>
            <a className="cursor-pointer" href="#">
              My Work**
            </a>
          </li>
        </ul>
        <button>
          <a className="cursor-pointer text-nowrap" href="$">
            Lets Work
          </a>
        </button>
        <button className="cursor-pointer flex md:hidden">
          <Menu className="scale-150" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
