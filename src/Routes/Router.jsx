import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Surveys from "../pages/Surveys/Surveys";
import ProMember from "../pages/ProMember/ProMember";
import SurveyDetail from "../pages/SurveyDetail/SurveyDetail";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <SurveyDetail/>
      },
      {
        path: "/proMember",
        element: <ProMember />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

export default Router;
