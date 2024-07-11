import { useState } from "react";
import { useUpdateProductMutation } from "../../redux/api/baseApi";

const ProductUpdateModal = ({ product }) => {
  const [formState, setFormState] = useState({
    title: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
    rating: product.rating,
    image: product.image,
    brand: product.brand,
    stock: product.stock,
  });
  const [updateProduct] = useUpdateProductMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({ id: product._id, ...formState }).unwrap();
      document.getElementById("my_modal_1").close(); // Close the modal after successful update
    } catch (error) {
      console.error("Failed to update the product: ", error);
    }
  };

  const renderInputField = (key, value) => {
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
    <div>
      <span>
        {" "}
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-green-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        }
      </span>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            {Object.entries(formState).map(([key, value]) => (
              <div className="my-4" key={key}>
                {renderInputField(key, value)}
              </div>
            ))}
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
    </div>
  );
};

export default ProductUpdateModal;
