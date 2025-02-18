import axios from "axios";

// Cập nhật baseURL đến localhost:5121
const baseURL = "http://localhost:5121/api";  // Thay đổi địa chỉ tại đây

const config = {
  baseURL: baseURL,  // Sử dụng baseURL đã khai báo ở trên
};

const api = axios.create(config);

const handleBefore = (config) => {
  const token = localStorage.getItem("token")?.replaceAll('"', "");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};

api.interceptors.request.use(handleBefore);

export default api;
