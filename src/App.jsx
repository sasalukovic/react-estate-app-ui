import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import HomePage from "./pages/Home/HomePage";
import ListPage from "./pages/List/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
]);

function App() {
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
