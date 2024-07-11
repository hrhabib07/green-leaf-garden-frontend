import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductManagement from "../pages/ProductManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/management",
    element: <ProductManagement></ProductManagement>,
  },
]);
