import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../../hooks/context";

export default function LogoutModule() {
    const { userLogoutHandler } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        userLogoutHandler();      
        navigate("/login"); 
    }, [userLogoutHandler, navigate]);

    return <span className="loader"></span>;
}
