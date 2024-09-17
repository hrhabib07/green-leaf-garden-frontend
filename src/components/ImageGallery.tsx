import { useGetAllProductsQuery } from "../redux/api/baseApi";

const ImageGallery = () => {
  const { data } = useGetAllProductsQuery();
  const products = data?.data;

  // If data is not loaded yet or there's an error, handle loading state
  if (!products) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <h1 className="text-4xl font-semibold text-green-950 ">
          Products gallery
        </h1>
        <p className="text-2xl text-gray-500">Here is my product gallery! </p>
      </div>
      <div className="grid grid-cols-6 gap-1 p-4">
        {products.slice(0, 9).map((product: any, index: number) => {
          const getColSpan = () => (index % 3 === 0 ? 2 : 1); // Dynamic column span logic
          const getRowSpan = () => (index % 5 === 0 ? 2 : 1); // Dynamic row span logic

          return (
            <div
              key={product._id}
              className={`col-span-${getColSpan()} row-span-${getRowSpan()} overflow-hidden`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
