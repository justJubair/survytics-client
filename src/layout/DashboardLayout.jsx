import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import useAuth from "../hooks/useAuth";
import Loader from "../shared/Loader/Loader";

const Dashboard = () => {
    const {loading} = useAuth()
    if(loading){
        return <Loader/>
    }
    return(
        <div className="flex">
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