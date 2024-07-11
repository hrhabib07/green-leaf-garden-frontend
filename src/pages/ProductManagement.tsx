import CategoryManagement from "../components/categoryManagement/CategoryManagement";
import Navbar from "../components/navbar/navbar";

const ProductManagement = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>

      <CategoryManagement></CategoryManagement>
    </div>
  );
};

export default ProductManagement;
