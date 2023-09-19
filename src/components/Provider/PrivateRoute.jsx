import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/AuthenticationPage/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
    const location = useLocation(); 
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className=" flex justify-center gap-5 pt-12">
            <Spinner color="green" />
            <Spinner color="amber" />
            <Spinner color="teal" />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;