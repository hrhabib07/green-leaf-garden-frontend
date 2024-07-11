import AllProductContainer from "../components/allProdcutContainer/AllProductContainer";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

const AllProducts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <AllProductContainer></AllProductContainer>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
