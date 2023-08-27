import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import { App } from "./App";
import { Posts_001 } from "./detail/posts_001";

export const router = createBrowserRouter([
  // { path: "/", element: <App /> },
  { path: "Posts_001", element: <Posts_001 />},
]);