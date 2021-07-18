import axios from "axios";

/**
 * @description Instance Axios
 */
const restApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://localhost:5001" // 'https://api.acrtr.ru/'
      : "https://api.acrtr.ru/",
  // timeout: 5000
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
});

restApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("Request error ::", error);

    return Promise.reject(error);
  }
);

restApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 415)
      return Promise.reject(error);

    console.log("Response error ::", error);
    console.log(error.message);

    return Promise.reject(error.response.data);
  }
);

export default restApi;
