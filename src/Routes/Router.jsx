import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Surveys from "../pages/Surveys/Surveys";
import ProMember from "../pages/ProMember/ProMember";
import SurveyDetail from "../pages/SurveyDetail/SurveyDetail";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/DashboardLayout";
import AddSurvey from "../pages/Dashboard/AddSurvey/AddSurvey";
import ManageSurveys from "../pages/Dashboard/ManageSurveys/ManageSurveys";
import UpdateSurvey from "../pages/Dashboard/ManageSurveys/UpdateSurvey";
import TableResponse from "../pages/Dashboard/TableResponse/TableResponse";
import ChartResponse from "../pages/Dashboard/ChartResponse/ChartResponse";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Error from "../pages/Error/Error";
import SurveyorRoute from "./SurveyorRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import AdminSurveyorRoute from "./AdminSurveyorRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/survey/:id",
        element: <SurveyDetail />,
      },
      {
        path: "/proMember",
        element: <PrivateRoute><ProMember /></PrivateRoute>
      },
      {
        path: "/aboutUs",
        element: <AboutUs/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error/>,
    children: [
      {
        path: "/dashboard/addSurvey",
        element: <SurveyorRoute><AddSurvey /></SurveyorRoute>
      },
      {
        path: "/dashboard/manageSurveys",
        element: <AdminSurveyorRoute><ManageSurveys /></AdminSurveyorRoute>
      },
      {
        path: "/dashboard/updateSurvey/:id",
        element: <SurveyorRoute><UpdateSurvey/></SurveyorRoute>
      },
      {
        path: "/dashboard/responseTable",
        element: <AdminSurveyorRoute><TableResponse /></AdminSurveyorRoute>
      },
      {
        path: "/dashboard/responseChart",
        element: <AdminSurveyorRoute><ChartResponse/></AdminSurveyorRoute>
      },
      {
        path: "/dashboard/manageUsers",
        element: <AdminRoute><ManageUsers/></AdminRoute>
      },
      {
        path: "/dashboard/paymentHistory",
        element: <AdminRoute><PaymentHistory/></AdminRoute>
      },

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Router;
