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
export const logout = (data) => api.post('/api/logout', data);


api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 &&
            originalRequest &&
            !originalRequest._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                await axios.get(
                    'http://localhost:8080/api/refresh',
                    {
                        withCredentials: true
                    }
                );

                return api.request(originalRequest);
            } catch (error) {
                console.log(error.message);
            }
        }
        throw error;
    }
);
export default api;