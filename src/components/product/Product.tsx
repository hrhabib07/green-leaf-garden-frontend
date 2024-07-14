/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "sonner";
import { useState } from "react";
import { useUpdateProductMutation } from "../../redux/api/baseApi";
import Rating from "../rating/Rating";
import { NavLink } from "react-router-dom";

const Product = ({ product }: any) => {
  // console.log(product);
  const { _id, title, image, price, rating } = product;
  const [stock, setStock] = useState(product.stock);
  const dispatach = useDispatch();
  const [updateProduct] = useUpdateProductMutation();

  const handleAddToCart = async () => {
    toast.success("your product added to cart successfully");
    if (stock < 1) {
      toast.error("No product Available");
    } else {
      setStock(stock - 1);
      dispatach(addToCart({ id: _id, price }));
      try {
        await updateProduct({ id: _id, stock: stock - 1 }).unwrap();
      } catch (error) {
        console.error("Failed to update the product:", error);
        toast.error("Failed to update the stock");
      }
    }
    // const reduceQuantity = await ;
    // const product =
  };

  return (
    <div className="bg-base-100 w-96 shadow-lg p-0 rounded-sm m-0 border-3 border-black my-4">
      <div className="relative group p-0 m-0">
        <figure>
          <img className="w-full" src={image} alt="tree-image-1" />
        </figure>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <div className="w-full px-16 pb-32 grid grid-cols-4  gap-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out transform translate-y-full">
            <div
              onClick={handleAddToCart}
              className="rounded-s-full btn rounded-none bg-white flex items-center justify-center h-12 text-gray-600 	hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            <div className="btn rounded-none bg-white flex items-center justify-center h-12 text-gray-600 	hover:text-black">
              <NavLink to={`/product/${_id}`}>
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </NavLink>
            </div>
            <div className="btn rounded-none bg-white flex items-center justify-center h-12 text-gray-600 	hover:text-black">
              <NavLink to={`/product/${_id}`}>
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
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </NavLink>
            </div>
            <div className="btn rounded-none bg-white flex items-center justify-center h-12 text-gray-600 	hover:text-black rounded-e-full">
              <NavLink to={`/product/${_id}`}>
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
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body text-center p-0 m-0 my-4">
        <h2 className="text-center">{title}</h2>
        <div className="flex items-center justify-center">
          <Rating value={rating}></Rating>
          <span>({rating})</span>
          <div className="flex"></div>
        </div>
        <p className="font-bold text-md text-green-950">${price}</p>
      </div>
    </div>
  );
};

export default Product;
