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

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/available-food",
        element: <AvailableFood/>
      },
      {
        path:"/add-food",
        element: <AddFood/>
      },
      {
        path:"/manage-foods",
        element: <ManageFood/>
      },
      {
        path:"/food-request",
        element: <FoodRequest/>
      },
      {
        path:"/food/:id",
        element: <FoodDetails/>,
        loader: ({params}) => fetch(`https://hunger-relief-server.vercel.app/api/v1/food/${params.id}`)
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/register",
        element: <Register/>
      },
    ],
  },
]);
export default Routes;
