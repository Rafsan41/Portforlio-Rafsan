import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home.jsx";
import Project from "./Pages/ProjectPage/Project/Project.jsx";
import Blog from "./Pages/BlogPage/Blog/Blog.jsx";
import About from "./Pages/AboutPage/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/project",
    element: <Project></Project>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
