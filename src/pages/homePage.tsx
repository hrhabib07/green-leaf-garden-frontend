import Footer from "../components/footer/Footer";
import ImageGallery from "../components/ImageGallery";
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
      <ImageGallery></ImageGallery>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
