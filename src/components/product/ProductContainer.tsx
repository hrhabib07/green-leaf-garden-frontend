import { NavLink } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetSearchedProductsQuery,
} from "../../redux/api/baseApi";
import Product from "./Product";
import SearchAndFilterBar from "../searchAndFilter/SearchAndFilterBar";
import { Key, SetStateAction, useState, useEffect } from "react";
import Pagination from "../searchAndFilter/Pagination";

const ProductContainer = () => {
  const [searchedText, setSearchedText] = useState("");
  const [treeCategory, setTreeCategory] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false); // New state to handle search status

  const { data: allData } = useGetAllProductsQuery();
  const allProducts = allData?.data;

  const pageLimit = 3;

  // Construct the query parameters based on the state values
  const queryParams = new URLSearchParams({
    ...(searchedText && { searchTerm: searchedText }),
    ...(treeCategory && { category: treeCategory }),
    ...(sortValue && { sort: sortValue }),
    page: currentPage.toString(), // Convert number to string
    limit: pageLimit.toString(),
  }).toString();

  // Fetch the products based on the query parameters
  const { data, isFetching } = useGetSearchedProductsQuery(queryParams); // Use isFetching from the query to know if it's loading
  const products = data?.data || allProducts;

  const totalPages = Math.ceil(allProducts?.length / pageLimit);

  // Handle search action
  const handleSearch = () => {
    setIsSearching(true); // Start searching
  };

  // Reset searching state when fetching finishes
  useEffect(() => {
    if (!isFetching) {
      setIsSearching(false); // End searching when fetching completes
    }
  }, [isFetching]);

  const handleChangePage = (newPage: SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="my-16 max-w-7xl mx-auto" id="product-container">
      <div className="">
        <h1 className="text-4xl font-semibold text-green-950 ">
          Featured Product
        </h1>
        <p className="text-2xl text-gray-500">
          You can add your product here!{" "}
        </p>
      </div>

      <SearchAndFilterBar
        setSearchedText={setSearchedText}
        setTreeCategory={setTreeCategory}
        treeCategory={treeCategory}
        setSortValue={setSortValue}
        sortValue={sortValue}
        onSearch={handleSearch} // Trigger search when clicking search button
      />

      <div className="my-2">
        {(searchedText || treeCategory) && products.length > 0 && (
          <p className="text-start text-green-500">
            {products.length} Data found{" "}
          </p>
        )}
        {(searchedText || treeCategory) &&
          products.length === 0 &&
          !isFetching && (
            <p className="text-red-500 text-center text-xl font-semibold">
              No Data found{" "}
            </p>
          )}
      </div>

      {/* Show loading message when search is in progress */}
      {isFetching && (
        <p className="text-xl font-bold text-center animate-pulse">
          {isSearching ? "Searching..." : "Loading..."}
        </p>
      )}

      {/* Show products when data is available */}
      {!isFetching && products?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map((item: { _id: Key | null | undefined }) => (
            <Product product={item} key={item._id} />
          ))}
        </div>
      )}

      {/* Pagination Section */}
      <div className="my-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handleChangePage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <NavLink to="/products" className="h-6 py-12">
        <button
          className="btn btn-active bg-green-950  text-white my-4 uppercase hover:bg-white  hover:text-green-950"
          disabled={isFetching} // Disable button if data is still loading
        >
          <span>Show All Products</span>
          <span className="animate-pulse">
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
                d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </NavLink>
    </div>
  );
};

export default ProductContainer;
