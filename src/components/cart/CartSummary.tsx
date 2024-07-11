const CartSummary = () => {
  return (
    <div>
      <p className="text-lg font-semibold text-start">Cart Details</p>
      <div className="flex justify-between">
        <span>Total Price : </span>
        <span>$120</span>
      </div>
      <div className="flex justify-between">
        <span>Items : </span>
        <span>1</span>
      </div>
      <button className="btn bg-green-950 text-white my-2 uppercase hover:bg-white hover:text-green-950">
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
