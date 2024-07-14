/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from "react";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import ProductTable from "./ProductTable";
import ProductUpdateModal from "./ProductUpdateModal";

const CategoryManagement = () => {
  const { data } = useGetAllProductsQuery();
  const products = data?.data;

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditProduct = (product: SetStateAction<null>) => {
    setSelectedProduct(product);
    // document?.getElementById("my_modal_1")?.showModal();
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.close();
  };

  return (
    <div className="overflow-x-auto my-8">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item: any, index: any) => (
            <ProductTable
              key={index}
              product={item}
              rank={index + 1}
              onEditProduct={handleEditProduct}
            />
          ))}
        </tbody>
      </table>
      {selectedProduct && <ProductUpdateModal product={selectedProduct} />}
    </div>
  );
};

export default CategoryManagement;
