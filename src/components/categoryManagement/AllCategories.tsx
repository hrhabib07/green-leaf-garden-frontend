import { SetStateAction, useState } from "react";
import { useGetAllCategoriesQuery } from "../../redux/api/baseApi"; // Assuming this hook fetches categories
import CategoryTable from "./CategoryTable";
import CategoryUpdateModal from "./CategoryUpdateModal";
import AddCategoryModal from "./AddCategoryModal";

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
    <div className=" my-8">
      <div>
        <div className="h-full bg-gray-50 py-4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-[1200px] mx-8 md:mx-auto">
            <div className="">
              <div className="text-start max-w-[600px]">
                <p className="border-l-4 border-l-green-950 pl-2 text-2xl uppercase ">
                  {" "}
                  Welcome to
                </p>
                <h2 className="text-green-950 font-semibold text-5xl uppercase">
                  Category Management Dashboard
                </h2>
                <p className="my-2 text-gray-500">
                  Manage your product inventory effortlessly.
                </p>
                {/* Add category button */}
                <div className="h-6">
                  <AddCategoryModal />
                </div>
              </div>
            </div>
            <div className="flex-1 w-full flex items-center justify-end">
              <img
                src="https://img.freepik.com/free-vector/creative-delivery-concept_23-2147713639.jpg?t=st=1726592477~exp=1726596077~hmac=4bbfc003d7acd65c31ec9a9ca0b28731df244c0698709050805e6adf7db68823&w=826"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Category Name</th>
            <th>Id</th>
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
      <div></div>
      {selectedCategory && <CategoryUpdateModal category={selectedCategory} />}
    </div>
  );
};

export default AllCategories;
