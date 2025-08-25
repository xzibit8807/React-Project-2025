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

            console.log("Login API data:", response);

            // The backend returns { message, token }
            const { token } = response;

            if (!token) {
                throw new Error("Login failed: No token received");
            }

            // Store in localStorage
            localStorage.setItem("accessToken", token);
            localStorage.setItem("email", email); // we already have it from login form

            // Update React context
            setUserData({
                accessToken: token,
                email,
            });

            return { accessToken: token, email };
        } catch (err) {
            console.error("Login error:", err.message);
            throw err;
        }
    };

    return { login };
};


// export const useLogin = () => {
//     const login = async (email, password) => {
//         const response = await request.post(`${baseUrl}/login`, { email, password });
//         const { accessToken, user } = response.data;

//         // ✅ Fix: Ensure response has an accessToken before storing it
//         if (response.accessToken) {
//             // localStorage.setItem('accessToken', response.accessToken);
//             localStorage.setItem('accessToken', accessToken);
//             localStorage.setItem('userId', user._id);
//             localStorage.setItem('email', user.email);
//         }
//         setUserData({
//             accessToken,
//             _id: user._id,
//             email: user.email,
//         });
//         return response;
//     };

//     return { login };
// };



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