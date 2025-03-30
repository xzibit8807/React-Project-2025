import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";

export default function LogoutModule() {
    const { isLoggedOut } = useLogout()
    return isLoggedOut
        ? <Navigate to="/" />
        :<span class="loader"></span>
}