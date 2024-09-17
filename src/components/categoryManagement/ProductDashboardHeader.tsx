import AddProductModal from "./AddProductModal";

const CategoryManagementDashboardHeader = () => {
  const handleModalOpen = () => {
    // () => document.getElementById("my_modal_2").showModal();
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    modal?.showModal();
  };
  return (
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
            <div onClick={handleModalOpen} className="h-6">
              <AddProductModal></AddProductModal>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full flex items-center justify-end">
          <img
            width={"50%"}
            src="https://i.ibb.co/GMvvYqN/admin-Icon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryManagementDashboardHeader;
