import { NavLink } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import Product from "./Product";
import SearchAndFilterBar from "../searchAndFilter/SearchAndFilterBar";

const ProductContainer = () => {
  const { data } = useGetAllProductsQuery();
  const products = data?.data;
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
      <SearchAndFilterBar></SearchAndFilterBar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.slice(0, 6).map((item) => (
          <Product product={item} key={item._id}></Product>
        ))}
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
