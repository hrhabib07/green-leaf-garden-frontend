import Footer from "../footer/Footer";
import Navbar from "../navbar/navbar";

const OrderInfo = () => {
  //   location.reload();
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="text-start my-8">
          <h1 className="text-green-700 text-center font-semibold text-3xl">
            Congratulations!
          </h1>
          <p className="text-xl">Your order has been placed successfully</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderInfo;
