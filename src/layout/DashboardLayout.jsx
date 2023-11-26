import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
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