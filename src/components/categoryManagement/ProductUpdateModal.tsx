import { useState, useEffect } from "react";
import {
  useGetAllCategoriesQuery,
  useUpdateProductMutation,
} from "../../redux/api/baseApi";

const ProductUpdateModal = ({ product }: any) => {
  const [treeCategory, setTreeCategory] = useState(product.category);

  const { data: category } = useGetAllCategoriesQuery();
  const [formState, setFormState] = useState({
    title: "",
    price: "",
    description: "",
    rating: "",
    image: "",
    brand: "",
    stock: "",
  });

  useEffect(() => {
    if (product) {
      setFormState({
        title: product.title,
        price: product.price,
        description: product.description,
        rating: product.rating,
        image: product.image,
        brand: product.brand,
        stock: product.stock,
      });
    }
  }, [product]);

  const [updateProduct] = useUpdateProductMutation();

  const handleCategoryChange = (event: any) => {
    setTreeCategory(event.target.value);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await updateProduct({
        id: product._id,
        ...formState,
        category: treeCategory,
      }).unwrap();

      // Close the modal after successful update
      const modal = document.getElementById("my_modal_19") as HTMLDialogElement;
      modal?.close();
    } catch (error) {
      console.error("Failed to update the product: ", error);
    }
  };

  const renderInputField = (key: string, value: string | number) => {
    return (
      <div className="my-4" key={key}>
        <label htmlFor={key} className="text-lg font-bold">
          {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
        </label>
        <input
          type={typeof value === "number" ? "number" : "text"}
          name={key}
          className="input input-bordered w-full max-w-xs mx-2"
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  };

  return (
    <dialog id="my_modal_19" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          {Object.entries(formState).map(([key, value]) => (
            <div className="my-4" key={key}>
              {renderInputField(key, value)}
            </div>
          ))}

          <div className="text-start">
            <label htmlFor="category" className="text-lg font-bold">
              Select Category:
            </label>
            <div className="flex-1">
              <span>Filter: </span>
              <select
                id="category"
                name="category"
                className="select select-bordered w-full max-w-xs"
                onChange={handleCategoryChange}
                value={treeCategory}
                required
              >
                <option value="" disabled>
                  Filter by category
                </option>
                {category?.data?.map((cat: any) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="modal-action">
            <button type="submit" className="btn">
              Save
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => {
                const modal = document.getElementById(
                  "my_modal_19"
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
  );
};

export default ProductUpdateModal;
