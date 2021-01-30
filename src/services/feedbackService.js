import http from "./axiosInstance";

export const feedback = (feedback) => {
    return http.post("/project-feedbacks", feedback);
}
