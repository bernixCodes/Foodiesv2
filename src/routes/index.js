import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContent, AddProduct } from "../components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/create",
    element: <AddProduct />,
  },
]);
function Pages() {
  return <RouterProvider router={router} />;
}

export default Pages;
