import { Navigate } from "react-router";
import { useUserContext } from "../hooks/context";

export default function ProtectedRoute({ children }) {
    const { accessToken } = useUserContext();

    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    return children;
}