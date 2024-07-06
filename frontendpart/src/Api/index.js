import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
        Accept:"application/json"
    },
});

export const sendotp = (data) => api.post('api/send-otp', data);

export default api;