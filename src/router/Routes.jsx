import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableFood from "../pages/AvailableFood";
import AddFood from "../pages/AddFood";
import ManageFood from "../pages/ManageFood";
import FoodRequest from "../pages/FoodRequest";
import FoodDetails from "../pages/FoodDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/available-food",
        element: <AvailableFood />,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoutes>
            {" "}
            <AddFood />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-foods",
        element: (
          <PrivateRoutes>
            <ManageFood />
          </PrivateRoutes>
        ),
      },
      {
        path: "/food-request",
        element: (
          <PrivateRoutes>
            <FoodRequest />
          </PrivateRoutes>
        ),
      },
      {
        path: "/food/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(
            `https://hunger-relief-server.vercel.app/api/v1/food/${params.id}`
          ),
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
export default Routes;
