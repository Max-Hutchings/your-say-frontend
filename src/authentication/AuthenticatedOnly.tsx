import React, {useEffect} from "react";
import {AuthContextType, useYourSayUser} from "./context/UserContext.tsx";
import {NavigateFunction, Outlet, useNavigate} from "react-router-dom";



const AuthenticatedOnly: React.FC = () => {

    const userContext: AuthContextType = useYourSayUser();
    const navigate:NavigateFunction = useNavigate();


    useEffect(() => {
        if (userContext.user == null) {
            navigate("/login");
        }
    },[])



    return <Outlet />
}


export default AuthenticatedOnly;