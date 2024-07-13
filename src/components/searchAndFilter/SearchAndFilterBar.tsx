import { useState } from "react";

const SearchAndFilterBar = ({
  setSearchedText,
  setTreeCategory,
  treeCategory,
  setSortValue,
  sortValue,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleCategoryChange = (event) => {
    setTreeCategory(event.target.value);
  };
  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchedText(searchTerm);
  };
  return (
    <div className="flex my-2">
      <div className="flex-1 flex items-center">
        <div className="mr-2">Sort :</div>
        <select
          className="select  select-bordered w-full max-w-xs"
          onChange={handleSortChange}
          value={sortValue}
        >
          <option value="" disabled selected>
            Sort product
          </option>
          <option value="-price">Price (highest first)</option>
          <option value="price">Price (lowest first)</option>
          <option value="-rating">Rating (highest first)</option>
          <option value="rating">Rating (lowest first)</option>
          {/* <option value="shade">Shade Trees</option> */}
        </select>
      </div>
      <div className="flex-1">
        <span>Filter: </span>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleCategoryChange}
          value={treeCategory}
        >
          <option value="" disabled selected>
            Filter by category
          </option>
          <option value="fruit">Fruit Trees </option>
          <option value="flowers">Flowers Trees</option>
          <option value="shade">Shade Trees</option>
        </select>
      </div>
      <div className="flex-1 navbar-end w-full">
        <form className="form-control flex flex-row" onSubmit={handleSubmit}>
          <div className="mr-2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleInputChange}
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <button type="submit" className="flex ml-4 btn ">
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
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchAndFilterBar;
