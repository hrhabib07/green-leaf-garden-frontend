import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-50 py-2">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Brand Section */}
        <div className="flex-1">
          <h2 className="text-green-950 font-semibold text-xl text-center md:text-left">
            Green Leaf Garden
          </h2>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden text-green-950 text-xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>

        {/* Nav Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute left-0 top-14 w-full bg-gray-50 lg:static lg:block lg:flex lg:w-auto lg:bg-transparent`}
        >
          <ul className="menu menu-horizontal flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <li>
              <NavLink to="/" className="text-green-950 hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/management"
                className="text-green-950 hover:underline"
              >
                Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="text-green-950 hover:underline"
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="text-green-950 hover:underline">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
