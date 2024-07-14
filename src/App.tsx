import { Toaster } from "sonner";
import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { router } from "./routes/routes";
import useBeforeUnloadWarning from "./hooks/useBeforeUnloadWarning";
function App() {
  useBeforeUnloadWarning(
    "Warning: Your cart will be cleared if you refresh the page."
  );

  return (
    <div className="">
      <Toaster></Toaster>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
