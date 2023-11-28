/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../shared/Loader/Loader";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <Loader/>
    }
    if(user){
        return children
    } else{
        return <Navigate to="/login" state={{path: location.pathname}}/>
    }
   }
export default PrivateRoute;