const request = async (method, url, data, options = {}) => {
    const token = localStorage.getItem("accessToken");

    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        method,
        headers, // ✅ always use this one
        body: data ? JSON.stringify(data) : undefined,
    });

    // console.log("📡 Request:", method, url, {
    //     headers,
    //     body: data ? JSON.stringify(data) : undefined,
    // });
    // console.log("📡 Sending Authorization header:", headers["Authorization"]);


    const responseContentType = response.headers.get("Content-Type");
    if (!responseContentType) {
        return;
    }

    if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw result;
    }
    // console.log("📡 Sending Authorization header:", headers["Authorization"]);


    return response.json();
};



export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
}