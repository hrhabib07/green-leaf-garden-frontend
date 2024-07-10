const Navbar = () => {
  return (
    <div className="bg-base-100   bg-gray-50 py-2">
      <div className="max-w-[1200px] navbar  mx-auto flex justify-evenly">
        <div className="navbar-center hidden flex-1 lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Store</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <h2 className="text-green-950 font-semibold text-xl text-center">
            Green Leaf Garden
          </h2>
        </div>
        <div className="flex-1 navbar-end w-full">
          <form className="form-control flex flex-row justify-between">
            <div className="mr-2">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="flex items-center justify-center ml-4 btn ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
