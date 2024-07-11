import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductManagement from "../pages/ProductManagement";
import AllProducts from "../pages/AllProducts";
import CartPage from "../pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/management",
    element: <ProductManagement></ProductManagement>,
  },
  {
    path: "/products",
    element: <AllProducts></AllProducts>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);
