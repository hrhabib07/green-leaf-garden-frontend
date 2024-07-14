import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import ProductContainer from "../components/product/ProductContainer";
import TopBanner from "../components/TopBanner/TopBanner";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      {/* <div>{data}</div> */}
      <ProductContainer></ProductContainer>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
