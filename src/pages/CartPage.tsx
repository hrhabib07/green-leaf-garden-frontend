import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
};

export default CartPage;
