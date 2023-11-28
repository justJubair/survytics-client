import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import useAuth from "../hooks/useAuth";
import Loader from "../shared/Loader/Loader";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const {loading} = useAuth()
    if(loading){
        return <Loader/>
    }
    return(
        <div className="flex">
             <Helmet>
        <title>Survytics | Dashboard</title>
      </Helmet>
            {/* sidebar */}
            <div className="w-0 lg:w-64">
                <Sidebar/>
            </div>
            {/* content */}
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    )}
export default Dashboard;