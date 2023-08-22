import { footerLogo } from "../assets/images/index.js";
import { navLinks } from "../constants/index.js";
import { chevronLeft } from "../assets/icons/index.js";
const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <section
      className={`fixed top-0  w-[300px] bg-coral-red  pt-10 min-h-screen transition duration-300 ease-in-out
      ${showSidebar ? "left-0" : " -left-[300px] z-10"}
      `}
    >
      <div className="flex flex-col items-center justify-evenly">
        <a href="/" className="flex-1 flex justify-center items-center">
          <img src={footerLogo} alt="logo" width={150} height={50} />
        </a>

        <ul className="flex flex-col justify-center items-center  gap-16 mt-20">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-montserrat text-white font-bold text-xl hover:text-slate-gray"
                onClick={() => setShowSidebar(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
