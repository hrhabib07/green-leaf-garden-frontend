import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchAndFilterBar from "../searchAndFilter/SearchAndFilterBar";

const CategoryManagement = ({ products }: any) => {
  const [searchedText, setSearchedText] = useState("");
  const [treeCategory, setTreeCategory] = useState("");
  const [sortValue, setSortValue] = useState("");

  const handleEditProduct = (product: any) => {
    // Handle product edit
    console.log("Editing product:", product);
  };

  // Filter and sort products based on the search, category, and sorting
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
    </div>
  );
};

export default CategoryManagement;
