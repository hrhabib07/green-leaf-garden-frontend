import { NavLink, useParams } from "react-router-dom";
import {
  useGetProductByIDQuery,
  useUpdateProductMutation,
} from "../../redux/api/baseApi";
import Footer from "../footer/Footer";
import Navbar from "../navbar/navbar";
import { toast } from "sonner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

interface Product {
  _id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  image: string;
  brand: string;
  stock: number;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetProductByIDQuery(id);
  const product: Product = data?.data;

  // console.log("product", product);
  const [stock, setStock] = useState(data?.data?.stock);
  console.log("stock", stock);
  const dispatach = useDispatch();
  const [updateProduct] = useUpdateProductMutation();
  const handleAddToCart = async () => {
    toast.success("your product added to cart successfully");
    if (stock < 1) {
      toast.error("No product Available");
    } else {
      setStock(stock - 1);
      dispatach(addToCart({ id: product?._id, price: product?.price }));
      try {
        await updateProduct({ id: product?._id, stock: stock - 1 }).unwrap();
      } catch (error) {
        console.error("Failed to update the product:", error);
        toast.error("Failed to update the stock");
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product details</div>;

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-4xl mx-auto my-16 p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="md:ml-8 mt-4 md:mt-0 text-left">
            <h1 className="text-3xl font-semibold text-green-950">
              {product.title}
            </h1>
            <p className="text-xl text-gray-500 mb-2">
              Category: {product.category}
            </p>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-green-950 mb-4">
              ${product.price}
            </p>
            <p className="text-lg text-gray-600">Brand: {product.brand}</p>
            <p className="text-lg text-gray-600">Stock: {product.stock}</p>
            <p className="text-lg text-gray-600">Rating: {product.rating}</p>
            <button
              onClick={handleAddToCart}
              className="btn btn-active bg-green-950 text-white mt-4 hover:bg-white hover:text-green-950 mr-6"
            >
              Add to Cart
            </button>
            <NavLink to={"/cart"}>
              <button className="btn btn-active bg-red-800 text-white mt-4 hover:bg-white hover:text-green-950">
                Go to Cart
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
