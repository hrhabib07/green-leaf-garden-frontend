import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import ProductContainer from "./components/product/ProductContainer";
import TopBanner from "./components/TopBanner/TopBanner";
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      {/* <div>{data}</div> */}
      <ProductContainer></ProductContainer>
      <Footer></Footer>
    </div>
  );
}

// background color: #fcfcfc

export default App;
