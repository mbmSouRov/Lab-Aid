import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
