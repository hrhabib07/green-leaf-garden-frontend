import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useGetProductByIDQuery } from "../../redux/api/baseApi";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // Fetch product data for all items in the cart
  const productsData = cart.map((item) => ({
    ...item,
    ...useGetProductByIDQuery(item.id),
  }));

  const isLoading = productsData.some((item) => item.isLoading);
  const hasError = productsData.some((item) => item.error);

  return (
    <div className="grid grid-cols-10 gap-8 my-8 mx-20">
      <div className="col-span-8  gap-4  justify-center">
        {cart.length === 0 ? (
          <p className="text-red-500">You have nothing in the cart</p>
        ) : (
          <div className="flex flex-col">
            {isLoading ? (
              <p>Loading...</p>
            ) : hasError ? (
              <p>Error loading products</p>
            ) : (
              productsData.map((item) => (
                <CartItem
                  key={item.id}
                  product={item.data.data}
                  quantity={item.quantity}
                />
              ))
            )}
          </div>
        )}
      </div>
      <div className="col-span-2">
        <CartSummary></CartSummary>
      </div>
    </div>
  );
};

export default Cart;
