import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 h-8 py-8 max-w-screen bg-white flex items-center justify-between">
      <div className="text-black pl-8 sm:pl-3">Logo</div>
      <div>
        <nav className>
          <ul className="flex flex-wrap justify-center space-x-8 text-black text-center p-3 overflow-hidden">
            <NavLink
              to=""
              className="hover:bg-blue-800 hover:text-white hover:rounded-s-xl duration-200 p-3 cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:bg-blue-800 hover:text-white hover:rounded-xl duration-200 p-3 cursor-pointer"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:bg-blue-800 hover:text-white hover:rounded-xl duration-200 p-3 cursor-pointer"
            >
              Contact
            </NavLink>
            <NavLink
              to="/api"
              className="hover:bg-blue-800 hover:text-white hover:rounded-e-xl duration-200 p-3 cursor-pointer"
            >
              API
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
