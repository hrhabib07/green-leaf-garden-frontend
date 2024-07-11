import { useState } from "react";
import { useUpdateProductMutation } from "../../redux/api/baseApi";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";

const CartItem = ({ product, quantity }) => {
  const [stock, setStock] = useState(product.stock);
  const { title, description, price, image, _id } = product;
  const dispatch = useAppDispatch();
  const [updateProduct] = useUpdateProductMutation();
  const handleAddToCart = async () => {
    if (stock < 1) {
      toast.error("No product Available");
    } else {
      setStock(stock - 1);
      dispatch(addToCart({ id: _id, price }));
      try {
        await updateProduct({ id: _id, stock: stock - 1 }).unwrap();
      } catch (error) {
        console.error("Failed to update the product:", error);
        toast.error("Failed to update the stock");
      }
    }
  };
  const handleRemoveFromCart = () => {
    setStock(stock + 1);
    dispatch(removeFromCart(_id));
  };
  const handleDeleteFromCart = () => {
    dispatch(deleteFromCart(_id));
  };
  return (
    <div className="grid grid-cols-4  w-full my-2 border">
      <div className="col-span-3 pr-12 flex">
        <div className="border mr-4">
          <img src={image} className="w-20" alt="" />
        </div>
        <div className="text-start">
          <h2>{title}</h2>
          <h2>{description}</h2>
          <p>Price: ${price}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <div className="flex justify-between w-32 bg-gray-100 rounded-lg p-4">
            <span onClick={handleRemoveFromCart} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </span>
            <span>{quantity}</span>
            <span onClick={handleAddToCart} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.0}
                stroke="currentColor"
                className="size-6 text-green-700 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </div>
          <span
            onClick={handleDeleteFromCart}
            className=" flex justify-end mt-2 mr-4  cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
