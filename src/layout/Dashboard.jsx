import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return(
        <div>
            {/* sidebar */}
            <div>

            </div>
            {/* content */}
            <div>
                <Outlet/>
            </div>
        </div>
    )}
export default Dashboard;