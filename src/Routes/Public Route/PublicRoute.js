import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Components/Appointment/Appointment";
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
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
]);
export default router;
