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
        element: <ManageSurveys />,
      },
      {
        path: "/dashboard/updateSurvey/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/survey/${params.id}`),
        element: <UpdateSurvey />,
      },
      {
        path: "/dashboard/responseTable",
        element: <TableResponse />,
      },
      {
        path: "/dashboard/responseChart",
        element: <ChartResponse/>,
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
