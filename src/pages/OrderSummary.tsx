/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch } from "react-redux";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import {
  useCreateOrderMutation,
  useGetProductByIDQuery,
} from "../redux/api/baseApi";
import CartItem from "../components/cart/CartItem";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { clearTheCart } from "../redux/features/cart/cartSlice";
import { useAppSelector } from "../redux/hooks";

const OrderSummary = () => {
  const cart = useAppSelector((state) => state.cart);
  const order = cart;
  // Fetch product data for all items in the cart
  const productsData = cart.map((item: { id: any }) => ({
    ...item,
    ...useGetProductByIDQuery(item.id),
  }));

  const isLoading = productsData.some(
    (item: { isLoading: any }) => item.isLoading
  );
  const hasError = productsData.some((item: { error: any }) => item.error);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [createOrder] = useCreateOrderMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Add the useDispatch hook

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(userData);
      await createOrder({
        ...userData,
        order,
      }).unwrap();
      dispatch(clearTheCart());

      toast.success("Your order have been placed successfully");
      navigate("/order-placed");
      //   toast.success("Product added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <div className="flex my-20">
          <div className="flex-1 mr-12">
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
          <div className="flex-1">
            <div className="text-start">
              <h2 className="font-semibold">Delivery information:</h2>
              <form onSubmit={handleSubmit}>
                <div className="my-4">
                  <div className="">
                    <input
                      type={"text"}
                      required
                      name={"name"}
                      className=" col-span-5 input input-bordered w-full max-w-xs mx-2"
                      onChange={handleChange}
                      placeholder="Name"
                    />
                  </div>
                  <div className="my-4">
                    <input
                      type={"text"}
                      required
                      name={"phone"}
                      className="input input-bordered w-full max-w-xs mx-2"
                      onChange={handleChange}
                      placeholder="email"
                    />
                  </div>
                  <div className="my-4">
                    <input
                      type={"text"}
                      required
                      name={"address"}
                      className="input input-bordered w-full max-w-xs mx-2"
                      onChange={handleChange}
                      placeholder="Phone"
                    />
                  </div>
                  <div className="my-4">
                    <label htmlFor="category" className="text-md font-semibold">
                      Payment Option :
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="input input-bordered  max-w-xs mx-2"
                      required
                    >
                      {/* <option value="fruit">Fruit Trees </option> */}
                      <option disabled>Bkash</option>
                      <option selected>Cash On Delivery</option>
                      <option disabled>Stripe</option>
                    </select>
                  </div>
                </div>

                <div className="max-w-sm mx-auto">
                  <button
                    type="submit"
                    className={`btn bg-green-950 text-white hover:bg-white hover:text-green-950 ${
                      (!userData.address ||
                        !userData.name ||
                        !userData.phone) &&
                      "btn-disabled"
                    }`}
                  >
                    Confirm Order
                    {/* <NavLink to={"/order-placed"}>Confirm Order</NavLink> */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderSummary;
