
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createRoot } from "react-dom/client";
import './App.css';
import Home from './Pages/HomePage/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Project from "./Pages/ProjectPage/Project/Project";
import Blog from "./Pages/BlogPage/Blog/Blog";
import About from "./Pages/AboutPage/About/About";
function App() {


const router = createBrowserRouter([
  {
    path: "/",
    element: ( <div><Home></Home></div>),
  },
  {
    path: "/home",
    element: (<div>  <Home></Home></div>),
  },
  {
    path: "/project",
    element: (<div><Project></Project></div>),
  },
  {
    path: "/blog",
    element: (<div><Blog></Blog></div>),
  },
  {
    path: "/about",
    element: (<div><About></About></div>),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


  return (
    <>
      <div>
      
      </div>
    </>
  )
}

export default App
