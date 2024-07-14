import { useState } from "react";
import { toast } from "sonner";
import { useCreateOrderMutation } from "../../redux/api/baseApi";
import { Navigate, useNavigate } from "react-router-dom";

const OrderPlacementModal = ({ order }) => {
  console.log(order);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [createOrder] = useCreateOrderMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userData);
      await createOrder({
        ...userData,
        order,
      }).unwrap();
      toast.success("Your order have been placed successfully");
      navigate("/order-placed");
      document.getElementById("my_modal_7").close(); // Close the modal after
      toast.success("Product added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleOrderCompleted = () => {
  //   toast.success("Your order have been placed successfully");
  //   location.reload();
  //   document.location.href = "/";
  // };
  return (
    <div>
      {/* <button className="btn btn-active bg-green-950  text-white  uppercase hover:bg-white  hover:text-green-950">
        <span className="">Add Product</span>
        <span className="animate-pulse">
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </button> */}
      <dialog id="my_modal_7" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <div className="my-4">
                <label htmlFor="name" className="text-lg font-bold">
                  Your Name
                </label>
                <input
                  type={"text"}
                  required
                  name={"name"}
                  className="input input-bordered w-full max-w-xs mx-2"
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label htmlFor="phone" className="text-lg font-bold">
                  Phone number
                </label>
                <input
                  type={"text"}
                  required
                  name={"phone"}
                  className="input input-bordered w-full max-w-xs mx-2"
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label htmlFor="address" className="text-lg font-bold">
                  Phone number
                </label>
                <input
                  type={"text"}
                  required
                  name={"address"}
                  className="input input-bordered w-full max-w-xs mx-2"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="modal-action">
              <button type="submit" className="btn">
                Save
              </button>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default OrderPlacementModal;

//  <dialog id="my_modal_7" className="modal">
//       <div className="modal-box">
//         <h3 className="font-bold text-2xl text-green-950">Congratulations!</h3>

//         <p className="py-4 text-start text-xl">{order.length}</p>
//         <div className="modal-action">
//           <form method="dialog">
//             <div className="my-4">
//               <label htmlFor="name" className="text-lg font-bold">
//                 Your Name
//               </label>
//               <input
//                 type={"text"}
//                 required
//                 name={"name"}
//                 className="input input-bordered w-full max-w-xs mx-2"
//                 value={"Your Name"}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="my-4">
//               <label htmlFor="phone" className="text-lg font-bold">
//                 Phone number
//               </label>
//               <input
//                 type={"text"}
//                 required
//                 name={"phone"}
//                 className="input input-bordered w-full max-w-xs mx-2"
//                 value={"Phone number"}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="my-4">
//               <label htmlFor="address" className="text-lg font-bold">
//                 Phone number
//               </label>
//               <input
//                 type={"text"}
//                 required
//                 name={"address"}
//                 className="input input-bordered w-full max-w-xs mx-2"
//                 value={"Address"}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* if there is a button in form, it will close the modal */}
//             <button onClick={handleOrderCompleted} className="btn">
//               Close
//             </button>
//           </form>
//         </div>
//       </div>
//     </dialog>
