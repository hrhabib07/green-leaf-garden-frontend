import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import ProductContainer from "./components/product/ProductContainer";
import TopBanner from "./components/TopBanner/TopBanner";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <ProductContainer></ProductContainer>
      <Footer></Footer>
    </>
  );
}

// background color: #fcfcfc

export default App;
