import http from "./axiosInstance";

export const getWorks = () => {
    return http.get("/works");
}

export const getWorksLength = () => {
    return http.get("/works/count");
}

