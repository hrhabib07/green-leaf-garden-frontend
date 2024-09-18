import { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetSearchedProductsQuery,
} from "../../redux/api/baseApi";
import Product from "../product/Product";
import Pagination from "../searchAndFilter/Pagination";
import SearchAndFilterBar from "../searchAndFilter/SearchAndFilterBar";

const AllProductContainer = () => {
  const [searchedText, setSearchedText] = useState("");
  const [treeCategory, setTreeCategory] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageLimit = 9;

  // Build search query based on filters
  const searchParams = new URLSearchParams();

  if (searchedText) {
    searchParams.append("searchTerm", searchedText);
  }
  if (treeCategory) {
    searchParams.append("category", treeCategory);
  }
  if (sortValue) {
    searchParams.append("sort", sortValue);
  }
  searchParams.append("page", currentPage.toString());
  searchParams.append("limit", pageLimit.toString());

  const searchAndQuery = searchParams.toString();

  // Fetch products based on the query
  const { data: searchData } = useGetSearchedProductsQuery(searchAndQuery);
  const { data: allData } = useGetAllProductsQuery();

  // Use searchData if there is any search/filter, otherwise use allData
  const products = searchData?.data || allData?.data;
  const totalPages = Math.ceil(
    (searchData?.total || allData?.total) / pageLimit
  );

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Frontend category filter: filter products by selected category after loading
  const filteredProducts = products?.filter((product: any) =>
    treeCategory ? product?.category?._id === treeCategory : true
  );

  return (
    <div className="my-12">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-green-950">
          Your All Products are Here
        </h1>
        <p className="text-2xl text-gray-500">
          You can add your product here from the Management Dashboard!
        </p>
      </div>

      {/* Management Search Bar */}
      <div className="my-10">
        <SearchAndFilterBar
          setSearchedText={setSearchedText}
          setTreeCategory={setTreeCategory}
          treeCategory={treeCategory}
          setSortValue={setSortValue}
          sortValue={sortValue}
        />
      </div>

      {/* Display the search results */}
      <div className="my-2">
        {(searchedText || treeCategory) && filteredProducts.length > 0 && (
          <p className="text-start text-green-500">
            {filteredProducts.length} Data found
          </p>
        )}
        {(searchedText || treeCategory) && filteredProducts.length === 0 && (
          <p className="text-red-500 text-center text-xl font-semibold">
            No Data found
          </p>
        )}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts?.map((item: any) => (
          <Product product={item} key={item?._id} />
        ))}
      </div>

      {/* Pagination section */}
      <div className="my-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handleChangePage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AllProductContainer;
