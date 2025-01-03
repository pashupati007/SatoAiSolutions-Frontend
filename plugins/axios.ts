import axios from "axios";

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
  });

  // You can add interceptors here if needed
  axiosInstance.interceptors.request.use((config) => {
    // Example: Add an Authorization header if a token exists
    const token = useCookie("auth_token").value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle global errors here if needed
      console.error(error);
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
