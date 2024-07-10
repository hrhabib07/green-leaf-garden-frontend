import Product from "./Product";

const ProductContainer = () => {
  return (
    <div className="my-12">
      <div className="mb-20">
        <h1 className="text-4xl font-semibold text-green-950 ">
          Featured Product
        </h1>
        <p className="text-2xl text-gray-500">
          You can add your product here!{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
};

export default ProductContainer;
