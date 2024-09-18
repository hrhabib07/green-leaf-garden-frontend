import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchAndFilterBar from "../searchAndFilter/SearchAndFilterBar";
import ProductUpdateModal from "./ProductUpdateModal"; // Import the modal

const CategoryManagement = ({ productsData }: any) => {
  const products = productsData?.data;
  // console.log(productsData.data);
  const [searchedText, setSearchedText] = useState("");
  const [treeCategory, setTreeCategory] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // Use selected product for modal

  const handleEditProduct = (product: any) => {
    setSelectedProduct(product); // Set the selected product
    const modal = document.getElementById("my_modal_19") as HTMLDialogElement; // Open correct modal
    modal?.showModal(); // Open the modal
  };

  // Filter and sort products based on search, category, and sorting
  const filteredProducts = products
    ?.filter((product: any) =>
      product.title.toLowerCase().includes(searchedText.toLowerCase())
    )
    ?.filter((product: any) =>
      treeCategory ? product.category === treeCategory : true
    )
    .sort((a: any, b: any) => {
      if (!sortValue) return 0;
      const isAscending = sortValue[0] !== "-";
      const field = isAscending ? sortValue : sortValue.slice(1);

      if (a[field] < b[field]) return isAscending ? -1 : 1;
      if (a[field] > b[field]) return isAscending ? 1 : -1;
      return 0;
    });

  return (
    <div>
      <SearchAndFilterBar
        setSearchedText={setSearchedText}
        setTreeCategory={setTreeCategory}
        treeCategory={treeCategory}
        setSortValue={setSortValue}
        sortValue={sortValue}
      />
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th> {/* New Category column */}
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts?.map((product: any, index: number) => (
            <ProductTable
              key={product._id}
              product={product}
              rank={index + 1}
              onEditProduct={handleEditProduct}
            />
          ))}
        </tbody>
      </table>

      {/* Render the modal and pass the selected product */}
      {selectedProduct && <ProductUpdateModal product={selectedProduct} />}
    </div>
  );
};

export default CategoryManagement;
