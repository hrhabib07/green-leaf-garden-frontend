import { useDeleteProductMutation } from "../../redux/api/baseApi";
import { useAppDispatch } from "../../redux/hooks";
import ProductUpdateModal from "./ProductUpdateModal";

const ProductTable = ({ product, rank }) => {
  const { _id, title, description, price, stock } = product;
  const dispatch = useAppDispatch();
  const [deleteProduct] = useDeleteProductMutation();
  console.log(product);
  const handleDeleteProduct = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirmed) {
      try {
        await deleteProduct(_id).unwrap();
        // Optionally, add code here to handle post-deletion actions like refetching products
      } catch (error) {
        console.error("Failed to delete the product: ", error);
      }
    }
  };

  return (
    <tr>
      <th>{rank}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>${price}</td>
      <td>{stock}</td>
      <td
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="btn bg-transparent border-none"
      >
        <ProductUpdateModal product={product}></ProductUpdateModal>
      </td>
      <td
        onClick={handleDeleteProduct}
        className="btn bg-transparent border-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-red-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </td>
    </tr>
  );
};

export default ProductTable;