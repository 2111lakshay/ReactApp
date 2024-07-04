import "./App.css";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Works from "./views/Works";
import Contact from "./views/Contact";
import Error from "./views/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About title = "About Us" />,
      },
      {
        path: "works",
        element: <Works title = "Works"/>,
      },
      {
        path: "contact",
        element: <Contact title = "Contact Us"/>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
