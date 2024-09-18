/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from "react";
import { useGetAllCategoriesQuery } from "../../redux/api/baseApi";

const SearchAndFilterBar = ({
  setSearchedText,
  setTreeCategory,
  treeCategory,
  setSortValue,
  sortValue,
}: any) => {
  const { data: category } = useGetAllCategoriesQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (event: { target: { value: string } }) => {
    setTreeCategory(event.target.value);
  };

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
    <div className="flex my-2">
      <div className="flex-1 flex items-center">
        <div className="mr-2">Sort :</div>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleSortChange}
          value={sortValue}
        >
          <option value="" disabled>
            Sort product
          </option>
          <option value="-price">Price (highest first)</option>
          <option value="price">Price (lowest first)</option>
          <option value="-rating">Rating (highest first)</option>
          <option value="rating">Rating (lowest first)</option>
        </select>
      </div>

      <div className="flex-1">
        <span>Filter: </span>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleCategoryChange}
          value={treeCategory}
        >
          <option value="" disabled>
            Filter by category
          </option>
          {category?.data?.map((cat: any) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
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
          <button type="submit" className="flex ml-4 btn">
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
