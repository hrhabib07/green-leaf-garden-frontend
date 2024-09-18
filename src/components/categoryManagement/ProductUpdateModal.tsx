import { useState, useEffect } from "react";
import { useUpdateProductMutation } from "../../redux/api/baseApi";

const ProductUpdateModal = ({ product }: any) => {
  const [treeCategory, setTreeCategory] = useState(product.category);

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
            <select
              id="category"
              name="category"
              className="input input-bordered max-w-xs mx-2"
              onChange={handleCategoryChange}
              value={treeCategory}
              required
            >
              <option value={product.category?.name} disabled>
                {product.category?.name || "Select a category"}
              </option>
              <option value="fruit">Fruit</option>
              <option value="flowers">Flowers</option>
              <option value="shade">Shade</option>
              {/* <option value={product.category} disabled>
                {product.category}
              </option>
              <option value="fruit">Fruit</option>
              <option value="flowers">Flowers</option>
              <option value="shade">Shade</option> */}
            </select>
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
