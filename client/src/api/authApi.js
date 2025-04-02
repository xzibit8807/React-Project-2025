import { useEffect } from "react";
import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../hooks/context";

// const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/users`;
const baseUrl = 'http://localhost:3030/users';

// export const useLogin = () => {
//     const login = async (email, password) =>
//         await request.post(
//             `${baseUrl}/login`,
//             { email, password },
//         );
//     if (login.success) {
//         localStorage.setItem('accessToken', response.data.accessToken);
//     }
//         return { login }
// };

export const useLogin = () => {
    const login = async (email, password) => {
        const response = await request.post(`${baseUrl}/login`, { email, password });
        const { accessToken, user } = response.data;

        // ✅ Fix: Ensure response has an accessToken before storing it
        if (response.accessToken) {
            // localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('userId', user._id);
            localStorage.setItem('email', user.email);
        }
        setUserData({
            accessToken,
            _id: user._id,
            email: user.email,
        });
        return response;
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