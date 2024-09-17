import AllCategories from "../components/categoryManagement/AllCategories";
import CategoryManagementDashboardHeader from "../components/categoryManagement/ProductDashboardHeader";
import CategoryManagement from "../components/categoryManagement/ProductManagement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

const ProductManagement = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <CategoryManagementDashboardHeader></CategoryManagementDashboardHeader>
      <CategoryManagement></CategoryManagement>
      <AllCategories></AllCategories>
      <Footer></Footer>
    </div>
  );
};

export default ProductManagement;
