import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useGetProductByIDQuery } from "../../redux/api/baseApi";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // const { data } = useGetProductByIDQuery();
  // console.log(cart);
  // // console.log();
  // // const data = cart.map((item) => getProductByID(item.id));
  // console.log(data);
  return (
    <div className="grid grid-cols-10 my-8">
      <div className="col-span-7  gap-4  justify-center">
        {cart.length === 0 ? (
          <p className="text-red-500">You have nothing this the cart</p>
        ) : (
          <div className=" flex flex-col">
            {cart.map((item) => {
              const { data, error, isLoading } = useGetProductByIDQuery(
                item.id
              );

              if (isLoading) return <p key={item.id}>Loading...</p>;
              if (error) return <p key={item.id}>Error loading product</p>;

              return (
                <CartItem
                  key={item.id}
                  quantity={item.quantity}
                  product={data.data}
                />
              );
            })}
          </div>
        )}
      </div>
      <div>
        <CartSummary></CartSummary>
      </div>
    </div>
  );
};

export default Cart;
