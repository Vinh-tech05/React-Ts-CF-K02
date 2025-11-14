import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutClient from "../layouts/LayoutClient";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutClient,
    children: [
      { path: "/", Component: HomePage },
      { path: "/cart", Component: CartPage },
    ],
  },
]);

const AppRoute = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoute;
