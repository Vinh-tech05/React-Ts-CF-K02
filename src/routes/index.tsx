import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutClient from "../layouts/LayoutClient";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutClient,
    children: [{ path: "/", Component: HomePage }],
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
