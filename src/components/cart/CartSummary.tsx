import { useAppSelector } from "../../redux/hooks";
import { NavLink } from "react-router-dom";

const CartSummary = () => {
  const cart = useAppSelector((state) => state.cart);
  let totalPrice = 0;
  let totalQuantity = 0;
  cart.map(
    (item) => (
      (totalQuantity = totalQuantity + item.quantity),
      (totalPrice = totalPrice + item.price * item.quantity)
    )
  );
  // const handlePlaceOrder = () => {
  //
  // };

  return (
    <div>
      <p className="text-lg font-semibold text-start">Cart Details</p>
      <div className="flex justify-between">
        <span>Total : </span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Items : </span>
        <span>{totalQuantity}</span>
      </div>
      <button
        // onClick={() => document.getElementById("my_modal_7").showModal()}
        className={`btn bg-green-950 text-white my-2  hover:bg-white hover:text-green-950  ${
          totalQuantity === 0 && "btn-disabled"
        }`}
      >
        <NavLink to={"/order-summary"}>
          <span className="uppercase">Place Order</span>
        </NavLink>
        {/* <OrderPlacementModal order={cart}></OrderPlacementModal> */}
      </button>
    </div>
  );
};

export default CartSummary;
