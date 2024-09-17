import { SetStateAction, useState } from "react";
import { useGetAllCategoriesQuery } from "../../redux/api/baseApi"; // Assuming this hook fetches categories
import CategoryTable from "./CategoryTable";
import CategoryUpdateModal from "./CategoryUpdateModal";

const AllCategories = () => {
  const { data } = useGetAllCategoriesQuery(); // Fetch categories
  const categories = data?.data;

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleEditCategory = (category: SetStateAction<null>) => {
    setSelectedCategory(category);
    const modal = document.getElementById("my_modal_99") as HTMLDialogElement;
    modal?.showModal();
  };

  return (
    <div className="overflow-x-auto my-8">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Category Name</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((item: any, index: any) => (
            <CategoryTable
              key={index}
              category={item}
              rank={index + 1}
              onEditCategory={handleEditCategory}
            />
          ))}
        </tbody>
      </table>
      {selectedCategory && <CategoryUpdateModal category={selectedCategory} />}
    </div>
  );
};

export default AllCategories;
