import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { Sidebar } from "./index.js";
import { useState } from "react";
const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-montserrat ">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="Humburger"
            width={25}
            height={25}
            className="lg:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
