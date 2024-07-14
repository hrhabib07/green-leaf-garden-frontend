import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-base-100   bg-gray-50 py-2">
      <div className="max-w-[1200px] navbar  mx-auto flex justify-evenly">
        <div className="navbar-center hidden flex-1 lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink to="/">
                <a>Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/management">
                <a>Management</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <a>Store</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <a>Cart</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 justify-end me-12">
          <h2 className="text-green-950 font-semibold text-xl text-center">
            Green Leaf Garden
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
