import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import Product from "./Product";

const ProductContainer = () => {
  const { data } = useGetAllProductsQuery();
  const products = data?.data;
  return (
    <div className="my-12">
      <div className="mb-20">
        <h1 className="text-4xl font-semibold text-green-950 ">
          Featured Product
        </h1>
        <p className="text-2xl text-gray-500">
          You can add your product here!{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((item) => (
          <Product product={item} key={item._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
