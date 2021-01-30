import http from "./axiosInstance";

export const getWorks = () => {
    return http.get("/works");
}

export const getWorksLength = () => {
    return http.get("/works/count");
}

export const getWorkDetails = ({ queryKey }) => {
    const [_key, id] = queryKey;
    if(_key === undefined) {
        return _key;
    }
    return http.get(`/works/${id}`);
}
