import http from "./axiosInstance";

export const getBestTwoProjects = () => {
    return http.get("/best-two-projects");
}

