import React, { useState } from "react";
import { useCreateCategoryMutation } from "../../redux/api/baseApi";
import { toast } from "sonner";

const AddCategoryModal = () => {
  const [categoryName, setCategoryName] = useState("");
  const [createCategory] = useCreateCategoryMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Call the mutation to create a new category
      await createCategory({ name: categoryName }).unwrap();
      const modal = document.getElementById(
        "my_modal_category"
      ) as HTMLDialogElement;
      modal?.close();
      toast.success("Category added successfully");
      setCategoryName(""); // Reset the form
    } catch (error) {
      console.error("Failed to add the category:", error);
    }
  };

  return (
    <div>
      <button
        className="btn btn-active bg-green-950 text-white uppercase hover:bg-white hover:text-green-950"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_category"
          ) as HTMLDialogElement;
          modal?.showModal();
        }}
      >
        <span>Add Category</span>
        <span className="animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </button>

      <dialog id="my_modal_category" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            {/* Input field for Category Name */}
            <div className="my-4">
              <label htmlFor="categoryName" className="text-lg font-bold">
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                name="categoryName"
                className="input input-bordered w-full max-w-xs mx-2"
                value={categoryName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="modal-action">
              <button type="submit" className="btn">
                Save
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_category"
                  ) as HTMLDialogElement;
                  modal?.close();
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddCategoryModal;
