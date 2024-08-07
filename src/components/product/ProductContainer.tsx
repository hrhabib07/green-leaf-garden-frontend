import { NavLink } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetSearchedProductsQuery,
} from "../../redux/api/baseApi";
import Product from "./Product";
import SearchAndFilterBar from "../searchAndFilter/SearchAndFilterBar";
import { Key, SetStateAction, useState } from "react";
import Pagination from "../searchAndFilter/Pagination";

const ProductContainer = () => {
  const [searchedText, setSearchedText] = useState("");
  const [treeCategory, setTreeCategory] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
  const { data } = useGetSearchedProductsQuery(queryParams);
  const products = data?.data || allProducts;
  // const [searchedText, setSearchedText] = useState("");
  // const [treeCategory, setTreeCategory] = useState("");
  // const [sortValue, setSortValue] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);

  // const { data } = useGetAllProductsQuery();
  // const allProducts = data?.data;
  // // console.log("all", allProducts);

  // const pageLimit = 3;

  // const searchAndQuery = `searchTerm=${searchedText}&category=${treeCategory}&sort=${sortValue}&page=${currentPage}`;

  // let products;
  // if ((searchedText || treeCategory) && sortValue) {
  //   const { data } = useGetSearchedProductsQuery(searchAndQuery);
  //   // console.log(data);
  //   products = data?.data;
  //   // console.log(products);
  // } else if (searchedText && treeCategory) {
  //   const { data } = useGetSearchedProductsQuery(
  //     `category=${treeCategory}&sort=${sortValue}&page=${currentPage}`
  //   );
  //   // console.log(data);
  //   products = data?.data;
  // } else if (sortValue) {
  //   const { data } = useGetSearchedProductsQuery(
  //     `sort=${sortValue}&page=${currentPage}`
  //   );
  //   // console.log(data);
  //   products = data?.data;
  // } else if (treeCategory) {
  //   const { data } = useGetSearchedProductsQuery(
  //     `category=${treeCategory}&page=${currentPage}`
  //   );
  //   products = data?.data;
  // } else {
  //   // const { data } = useGetAllProductsQuery();
  //   const { data } = useGetSearchedProductsQuery(
  //     `sort=${sortValue}&page=${currentPage}&limit=${pageLimit}`
  //   );
  //   products = data?.data;
  // }

  const totalPages = Math.ceil(allProducts?.length / pageLimit);
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
      ></SearchAndFilterBar>
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
        {products?.map((item: { _id: Key | null | undefined }) => (
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
      <NavLink to="/products" className="h-6 py-12">
        <button className="btn btn-active bg-green-950  text-white my-4 uppercase hover:bg-white  hover:text-green-950">
          <span className="">Show All Product</span>
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </NavLink>
    </div>
  );
};

export default ProductContainer;
