import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import MainLayout from "../Layouts/MainLayout";
import ErroPage from "../Pages/ErroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErroPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("./appsData.json"),
      },

      {
        path: "/apps",
        element: <Apps />,
      },

      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);

export default router;
