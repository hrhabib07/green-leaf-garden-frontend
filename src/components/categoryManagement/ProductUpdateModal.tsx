/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useUpdateProductMutation } from "../../redux/api/baseApi";

const ProductUpdateModal = ({ product }: any) => {
  const [treeCategory, setTreeCategory] = useState(product.category);
  const handleCategoryChange = (event: { target: { value: any } }) => {
    setTreeCategory(event.target.value);
  };
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
      const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
      modal?.close();
      // document?.getElementById("my_modal_1")?.close(); // Close the modal after successful update
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
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          {Object.entries(formState).map(([key, value]) => (
            <div className="my-4" key={key}>
              {renderInputField(key, value)}
            </div>
          ))}
          <div className="text-start">
            {" "}
            <label htmlFor="category" className="text-lg font-bold">
              Select Category:
            </label>
            <select
              id="category"
              name="category"
              className="input input-bordered  max-w-xs mx-2"
              onChange={handleCategoryChange}
              value={treeCategory}
              required
            >
              <option value={product.category} disabled selected>
                {product.category}
              </option>
              <option value="fruit">fruit</option>
              <option value="flowers">flowers</option>
              <option value="shade">shade</option>
            </select>
          </div>
          <div className="modal-action">
            <button type="submit" className="btn">
              Save
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ProductUpdateModal;
