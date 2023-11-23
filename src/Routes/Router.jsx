import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Surveys from "../pages/Surveys/Surveys";
import ProMember from "../pages/ProMember/ProMember";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/surveys",
                element: <Surveys/>
            },
            {
                path: "/proMember",
                element: <ProMember/>
            }
        ]
    }
])

export default Router