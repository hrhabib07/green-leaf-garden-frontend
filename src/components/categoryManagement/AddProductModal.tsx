import { useState } from "react";
import { useCreateProductMutation } from "../../redux/api/baseApi";
import { toast } from "sonner";

const AddProductModal = () => {
  const [errors, setErrors] = useState([]);
  const [treeCategory, setTreeCategory] = useState([]);

  const [formState, setFormState] = useState({
    title: "",
    price: 0,
    description: "",
    rating: 0,
    image: "",
    brand: "",
    stock: 0,
  });
  const [createProduct] = useCreateProductMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (event) => {
    setTreeCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formState);
      await createProduct({
        ...formState,
        price: Number(formState.price),
        rating: Number(formState.rating),
        stock: Number(formState.stock),
        category: treeCategory,
      }).unwrap();
      document.getElementById("my_modal_2").close(); // Close the modal after successful update
      toast.success("Product added successfully");
    } catch (error) {
      //   setErrors(error?.data?.errorSources);
      setErrors(error.data.errorSources);
      // console.log(errors);
    }
  };

  const renderInputField = (key, value) => {
    // console.log(error);
    return (
      <div className="my-4" key={key}>
        <label htmlFor={key} className="text-lg font-bold">
          {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
          {/* <small className="text-red-500">
            type : {typeof value === "number" ? "number" : "text"}
          </small> */}
        </label>
        <input
          type={typeof value === "number" ? "number" : "text"}
          required
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
      <button className="btn btn-active bg-green-950  text-white  uppercase hover:bg-white  hover:text-green-950">
        <span className="">Add Product</span>
        <span className="animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
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
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            {Object.entries(formState).map(([key, value]) => (
              <div className="my-4" key={key}>
                {renderInputField(key, value)}
              </div>
            ))}
            <div>
              {" "}
              <label htmlFor="category" className="text-lg font-bold">
                Select Category
              </label>
              <select
                id="category"
                name="category"
                className="input input-bordered  max-w-xs mx-2"
                onChange={handleCategoryChange}
                value={treeCategory}
                required
              >
                <option value="" disabled selected>
                  Select category
                </option>
                <option value="fruit">Fruit Trees </option>
                <option value="flowers">Flowers Trees</option>
                <option value="shade">Shade Trees</option>
              </select>
            </div>
            {errors && (
              <div>
                {errors.length > 1 ? (
                  <p>There is a error in your input.</p>
                ) : (
                  <p>There are {errors.length} error in your input.</p>
                )}
                <ol>
                  {errors.map((err) => (
                    <ol className="text-red-600">
                      {" "}
                      {err?.path} : {err.message}{" "}
                    </ol>
                  ))}
                </ol>
              </div>
            )}

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

export default AddProductModal;
