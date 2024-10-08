/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from "react";

const SearchAndFilterBar = ({
  setSearchedText,
  setSortValue,
  sortValue,
}: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (event: { target: { value: string } }) => {
    setSortValue(event.target.value);
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSearchedText(searchTerm);
  };

  return (
    <div className="flex items-center justify-between gap-4 my-4 p-4 bg-gray-50 rounded-lg shadow">
      {/* Sort options (left side) */}
      <div className="flex items-center space-x-4">
        <span className="text-lg font-medium">Sort By:</span>
        <select
          className="select select-bordered w-48"
          onChange={handleSortChange}
          value={sortValue}
        >
          <option value="" disabled>
            Select Sorting Option
          </option>
          <option value="-price">Price (highest first)</option>
          <option value="price">Price (lowest first)</option>
          <option value="-rating">Rating (highest first)</option>
          <option value="rating">Rating (lowest first)</option>
        </select>
      </div>

      {/* Search bar (right side) */}
      <div className="flex items-center space-x-2">
        <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
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
