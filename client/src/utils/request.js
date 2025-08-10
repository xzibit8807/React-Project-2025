const request = async (method, url, data, options = {}) => {
    options.headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
    };
    
    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
    options = {
        ...options,
        method, // keep the HTTP method!
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        body: JSON.stringify(data),
    };
}

    // options.credentials = 'include'; 
    const response = await fetch(url, options);
    
    const responseContentType = response.headers.get('Content-Type');
    if (!responseContentType) {
        return;
    }

    if (!response.ok) {
        const result = await response.json()

        throw result;
    }

    const result = await response.json();
        
    return result;

};


export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
}