import { useEffect } from "react";
import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../hooks/context";

// const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/users`;
const baseUrl = 'http://localhost:3030/users';


export const useLogin = () => {
    const { setUserData } = useContext(UserContext);

    const login = async (email, password) => {
        try {
            const response = await request.post(
                `${baseUrl}/login`,
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            // console.log("Login API data:", response);

            // Destructure everything returned from backend
            const { token, _id, email: userEmail } = response;

            if (!token) {
                throw new Error("Login failed: No token received");
            }

            // Store consistently
            localStorage.setItem("accessToken", token);
            localStorage.setItem("userId", _id);
            localStorage.setItem("email", userEmail);

            // Update context
            setUserData({
                accessToken: token,
                email: userEmail,
                userId: _id,
            });

            // console.log("🔑 Stored accessToken:", localStorage.getItem("accessToken"));
            // console.log("📦 localStorage content:", {
            //     accessToken: localStorage.getItem("accessToken"),
            //     userId: localStorage.getItem("userId"),
            //     email: localStorage.getItem("email"),
            // });

            return { accessToken: token, email: userEmail, userId: _id };
        } catch (err) {
            console.error("Login error:", err.message);
            throw err;
        }
    };

    return { login };
};



export const useRegister = () => {
    const register = (email, password) =>
        request.post(`${baseUrl}/register`, { email, password });

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
            .finally(userLogoutHandler);

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};