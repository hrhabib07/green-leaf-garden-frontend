import React, { useState } from "react";
import { useUpdateCategoryMutation } from "../../redux/api/baseApi";

const CategoryUpdateModal = ({ category }: any) => {
  // Use state to track the updated category name
  const [updatedName, setUpdatedName] = useState(category.name); // Initialize with the current category name
  const [updateCategory] = useUpdateCategoryMutation();

  const handleSave = async (e: any) => {
    e.preventDefault();

    try {
      // Send the updated name to the server via mutation
      await updateCategory({
        id: category._id,
        name: updatedName, // Use the updated name from the input
      }).unwrap();

      // Close the modal after saving
      const modal = document.getElementById("my_modal_99") as HTMLDialogElement;
      modal?.close();
    } catch (error) {
      console.error("Failed to update the category: ", error);
    }
  };

  return (
    <dialog id="my_modal_99" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Update Category</h3>
        <p className="text-red-500">
          You can't delete any category because categories are related to
          products.
        </p>

        {/* Input field for updating the category name */}
        <input
          type="text"
          placeholder="Category Name"
          value={updatedName} // Use state value
          onChange={(e) => setUpdatedName(e.target.value)} // Update the state when the user types
          className="input input-bordered w-full my-4"
        />
        <p className="text-green-500">You can only update the category name.</p>

        <div className="modal-action">
          {/* Save button */}
          <button className="btn" onClick={handleSave}>
            Save
          </button>
          {/* Cancel button */}
          <button
            className="btn btn-outline"
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_99"
              ) as HTMLDialogElement;
              modal?.close();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default CategoryUpdateModal;
