import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks";

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
  const handlePlaceOrder = () => {
    toast.success("Your order have been placed successfully");
    // location.reload();
    // document.location.href = "/";
  };

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
        onClick={handlePlaceOrder}
        className="btn bg-green-950 text-white my-2 uppercase hover:bg-white hover:text-green-950"
      >
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
