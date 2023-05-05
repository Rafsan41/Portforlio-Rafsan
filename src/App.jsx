import { createRoot } from "react-dom/client";
import "./App.css";
import Home from "./Pages/HomePage/Home/Home";
import Project from "./Pages/ProjectPage/Project/Project";
import Blog from "./Pages/BlogPage/Blog/Blog";
import About from "./Pages/AboutPage/About/About";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
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

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

  return <></>;
}

export default App;
