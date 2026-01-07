import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rosebudschoolnepal.org/app",
  // baseURL: "http://localhost:5000/app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://rosebudschoolnepal.org",
    // "Access-Control-Allow-Origin": "http://localhost:7896",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
