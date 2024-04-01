import HomePage from "./pages/Home/HomePage";
import ListPage from "./pages/List/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import SinglePage from "./pages/singlePage/SinglePage";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/list/:id",
        element: <SinglePage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
