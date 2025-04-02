import { createContext, useState, useContext, useEffect } from "react";


export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});

// Create a provider to manage the context
export function UserProvider({ children }) {
    const [userData, setUserData] = useState({
        _id: '',
        email: '',
        username: '',
        accessToken: '',
    });

    useEffect(() => {
        const storedAccessToken = localStorage.getItem("accessToken");
        const storedUserId = localStorage.getItem("userId");
        const storedEmail = localStorage.getItem("email");
        const storedUsername = localStorage.getItem("username");

        if (storedAccessToken) {
            setUserData({
                accessToken: storedAccessToken,
                _id: storedUserId,
                email: storedEmail,
                username: storedUsername,
            });
        }
    }, []);

    const userLoginHandler = (token, userId, email, username) => {
        localStorage.setItem("accessToken", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);

        setUserData({
            accessToken: token,
            _id: userId,
            email: email,
            username: username,
        });
    };

    const userLogoutHandler = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
        localStorage.removeItem("username");

        setUserData({
            accessToken: '',
            _id: '',
            email: '',
            username: '',
        });
    };

    return (
        <UserContext.Provider value={{
            ...userData,
            userLoginHandler,
            userLogoutHandler,
        }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}
