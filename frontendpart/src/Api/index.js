import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept:"application/json"
    },
});

export const sendotp = (data) => api.post('api/send-otp', data);
export const verifyotp = (data) => api.post('api/verify-otp', data);
export const activate = (data) => api.post('/api/activate', data);

export default api;