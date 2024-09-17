import React from "react";

const CategoryUpdateModal = ({ category }: any) => {
  const handleSave = () => {
    // Save logic here
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.close();
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Update Category</h3>
        <input
          type="text"
          placeholder="Category Name"
          defaultValue={category.name}
          className="input input-bordered w-full my-4"
        />
        <div className="modal-action">
          <button className="btn" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-outline">Cancel</button>
        </div>
      </form>
    </dialog>
  );
};

export default CategoryUpdateModal;
