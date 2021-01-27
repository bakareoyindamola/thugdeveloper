import http from "./axiosInstance";

export const getWorks = () => {
    return http.get("/works");
}

export const getWorksLength = () => {
    return http.get("/works/count");
}

export const getWorkDetails = ({ queryKey }) => {
    const [key, id] = queryKey;
    return http.get(`/works/${id}`);
}
