import { toast } from "sonner";

const OrderPlacementModal = () => {
  const handleOrderCompleted = () => {
    toast.success("Your order have been placed successfully");
    location.reload();
    document.location.href = "/";
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-2xl text-green-950">Congratulations!</h3>
        <p className="py-4 text-start text-xl">
          Your order have been placed. As You have not paid and you have no
          intention to pay You will never get the products. Be happy. Actually
          we don't have the product.
        </p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={handleOrderCompleted} className="btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default OrderPlacementModal;
