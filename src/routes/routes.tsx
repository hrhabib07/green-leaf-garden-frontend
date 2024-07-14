import { createBrowserRouter } from "react-router-dom";
import ProductManagement from "../pages/ProductManagement";
import AllProducts from "../pages/AllProducts";
import CartPage from "../pages/CartPage";
import ProductDetails from "../components/product/ProductDetails";
import OrderInfo from "../components/order/orderInfo";
import OrderSummary from "../pages/OrderSummary";
import HomePage from "../pages/homePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
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
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/order-placed",
    element: <OrderInfo />,
  },
  {
    path: "/order-summary",
    element: <OrderSummary />,
  },
]);
