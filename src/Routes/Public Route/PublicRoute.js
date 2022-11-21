import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../Components/AllUsers/AllUsers";
import Appointment from "../../Components/Appointment/Appointment";

import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import MyAppointment from "../../Components/MyAppointment/MyAppointment";
import Signup from "../../Components/Signup/Signup";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AdminRoute from "../Admin Route/AdminRoute";
import PrivateRoute from "../Private Route/PrivateRoute";

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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
