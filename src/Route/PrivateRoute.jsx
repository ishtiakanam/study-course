/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const tempUser = localStorage.getItem('user');

    // console.log({ user });
    // console.log(location.pathname);

    if (user || tempUser) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;