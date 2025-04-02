import { Navigate } from "react-router";
import { useLogout } from "../../../api/authApi";

export default function LogoutModule() {
    debugger;
    const { isLoggedOut } = useLogout()
    return isLoggedOut
        ? <Navigate to="/" />
        :<span class="loader"></span>
}