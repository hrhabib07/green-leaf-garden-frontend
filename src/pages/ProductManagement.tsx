import CategoryDashboardHeader from "../components/categoryManagement/CategoryDashboardHeader";
import CategoryManagement from "../components/categoryManagement/CategoryManagement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

const ProductManagement = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <CategoryDashboardHeader></CategoryDashboardHeader>
      <CategoryManagement></CategoryManagement>
      <Footer></Footer>
    </div>
  );
};

export default ProductManagement;
