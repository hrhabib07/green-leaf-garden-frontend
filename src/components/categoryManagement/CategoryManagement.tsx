import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import ProductTable from "./ProductTable";

const CategoryManagement = () => {
  const { data } = useGetAllProductsQuery();
  const products = data?.data;
  console.log(products);

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
          {products?.map((item, index) => (
            <ProductTable
              key={index}
              product={item}
              rank={index + 1}
            ></ProductTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManagement;
