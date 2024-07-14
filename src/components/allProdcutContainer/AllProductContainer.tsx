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

  const { data } = useGetAllProductsQuery();
  const allProducts = data?.data;
  // console.log("all", allProducts);

  const pageLimit = 9;

  const searchAndQuery = `searchTerm=${searchedText}&category=${treeCategory}&sort=${sortValue}&page=${currentPage}&limit=${pageLimit}`;

  let products;

  if ((searchedText || treeCategory) && sortValue) {
    const { data } = useGetSearchedProductsQuery(searchAndQuery);
    // console.log(data);
    products = data?.data;
    // console.log(products);
  } else if (sortValue) {
    const { data } = useGetSearchedProductsQuery(
      `sort=${sortValue}&page=${currentPage}`
    );
    // console.log(data);
    products = data?.data;
  } else if (treeCategory) {
    // console.log(treeCategory);
    const { data } = useGetSearchedProductsQuery(
      `category=${treeCategory}&page=${currentPage}&limit=${pageLimit}`
    );
    products = data?.data;
  } else {
    // const { data } = useGetAllProductsQuery();
    const { data } = useGetSearchedProductsQuery(
      `sort=${sortValue}&page=${currentPage}&limit=${pageLimit}`
    );
    products = data?.data;
  }

  const totalPages = Math.ceil(allProducts?.length / pageLimit);
  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="my-12">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-green-950 ">
          Your All products are Here
        </h1>
        <p className="text-2xl text-gray-500">
          You can add your product here From Management dashboard!{" "}
        </p>
      </div>

      <div className="my-10">
        <SearchAndFilterBar
          setSearchedText={setSearchedText}
          setTreeCategory={setTreeCategory}
          treeCategory={treeCategory}
          setSortValue={setSortValue}
          sortValue={sortValue}
        ></SearchAndFilterBar>
      </div>
      <div className="my-2">
        {(searchedText || treeCategory) && products.length > 0 && (
          <p className="text-start text-green-500">
            {products.length} Data found{" "}
          </p>
        )}
        {(searchedText || treeCategory) && products.length === 0 && (
          <p className="text-red-500 text-center text-xl font-semibold">
            No Data found{" "}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((item) => (
          <Product product={item} key={item._id}></Product>
        ))}
      </div>

      <div className="my-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handleChangePage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default AllProductContainer;
