const SearchAndFilterBar = () => {
  return (
    <div className="flex my-2">
      <div className="flex-1">
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Filter your search
          </option>
          <option>Price</option>
          <option>Stock</option>
          <option>Rating</option>
          <option>Brand</option>
        </select>
      </div>
      <div className="flex-1">
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Filter by category
          </option>
          <option>Indoor plants</option>
          <option>Outdoor Plants</option>
          <option>Summer Plants</option>
          <option>Winter Plants</option>
          <option>Autumn Pants</option>
          <option>All weather plants</option>
        </select>
      </div>
      <div className="flex-1 navbar-end w-full">
        <form className="form-control flex flex-row">
          <div className="mr-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="flex ml-4 btn ">
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
  );
};

export default SearchAndFilterBar;
