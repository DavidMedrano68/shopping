import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { root } from "./router/router";
import "./index.css";
import ShopProvider from "./reducer/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopProvider>
    <RouterProvider router={root} />
  </ShopProvider>
);
