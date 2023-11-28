/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loader from "../shared/Loader/Loader";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [role, isLoading] = useRole(user?.email)
    if(loading || isLoading){
        return <Loader/>
    }
    if(role=== "admin"){
        return children
    } else {
       return <Navigate to="/"/>
    }

    }
export default AdminRoute;