import { useCallback, useContext, useMemo } from "react";
import { UserContext } from "./context";
import request from "../utils/request";

export default function useAuth() {
    const { accessToken, ...authData } = useContext(UserContext);

    const myRequest = useCallback((method, url, data, options = {}) => {
        const authOptions = {
            ...options,
            headers: {
                'X-Authorization': accessToken,
                ...options.headers
            }
        };

        return request.baseRequest(method, url, data, accessToken ? authOptions : options);
    }, [accessToken]);

    const requestObject = useMemo(() => ({
        get: myRequest.bind(null, 'GET'),
        post: myRequest.bind(null, 'POST'),
        put: myRequest.bind(null, 'PUT'),
        delete: myRequest.bind(null, 'DELETE'),
    }), [myRequest])

    return {
        ...authData,
        accessToken,
        userId: authData._id,
        isAuthenticated: !!accessToken,
        request: requestObject,
    }
};