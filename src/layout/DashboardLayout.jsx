import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
    return(
        <div className="flex">
            {/* sidebar */}
            <div className="w-[250px]">
                <Sidebar/>
            </div>
            {/* content */}
            <div className="flex-1 bg-red-600">
                <Outlet/>
                <h1>Hello</h1>
            </div>
        </div>
    )}
export default Dashboard;