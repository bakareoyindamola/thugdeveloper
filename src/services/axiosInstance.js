import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_PORTFOLIO_API_BASE_URL;

const handleResponse = ({ data }) => data;

const handleRequest = (config) => {
    // add all configs here
    return config;
};

axios.interceptors.response.use(handleResponse, error => {
    const errorResponse = error.response;
    const expectedError = errorResponse && errorResponse.status >= 400 && errorResponse.status < 500;
    if (expectedError) {
        // you can show a toast here
        //  Client side error
    }
    return Promise.reject(error);
});


axios.interceptors.request.use(handleRequest, error => Promise.reject(error));

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
}

export default http;
