/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loader from "../shared/Loader/Loader";

const AdminSurveyorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [role, isLoading] = useRole(user?.email)
    if(loading || isLoading){
        return <Loader/>
    }
    if(role=== "admin" || role==="surveyor"){
        return children
    } else {
       return <Navigate to="/"/>
    }

    }
export default AdminSurveyorRoute;