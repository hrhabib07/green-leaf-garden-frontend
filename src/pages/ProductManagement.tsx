import AllCategories from "../components/categoryManagement/AllCategories";
import CategoryManagementDashboardHeader from "../components/categoryManagement/ProductDashboardHeader";
import CategoryManagement from "../components/categoryManagement/ProductManagement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import { useGetAllProductsQuery } from "../redux/api/baseApi";

const ProductManagement = () => {
  const { data } = useGetAllProductsQuery();
  const products = data?.data;

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <CategoryManagementDashboardHeader></CategoryManagementDashboardHeader>
      <CategoryManagement products={products}></CategoryManagement>
      <AllCategories></AllCategories>
      <Footer></Footer>
    </div>
  );
};

export default ProductManagement;
