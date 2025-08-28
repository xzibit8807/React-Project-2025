import { Navigate } from "react-router";
import { useUserContext } from "./context";

export default function GuestRoute({ children }) {
    const { accessToken } = useUserContext();

    // If logged in → block access
    if (accessToken) {
        return <Navigate to="/" replace />;
    }

    return children;
}
