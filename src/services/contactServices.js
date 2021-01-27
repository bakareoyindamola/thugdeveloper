import http from "./axiosInstance";

export const contactMe = (details) => {
    return http.post("/contacts", details);
}
