import About from "./Components/About/About";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import { Home } from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let routing = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  );
}

export default App;
