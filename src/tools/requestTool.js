const get = (url) => handleResponse(fetch(url, { method: "get" }));

const post = (url, data) => handleResponse(
    fetch(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }));

const handleResponse = (promise) => {

    return promise.then(response => {

        if (!response.ok) {

            return Promise.reject(response.statusCode)
        }

        return response.json();
    });
}

export const requestTool = {
    get,
    post
}

export default requestTool;