import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5121',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Thêm interceptor để xử lý lỗi
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // Xử lý response error
            console.error('Response Error:', error.response.data);
            if (error.response.status === 400) {
                if (error.response.data.includes('duplicate')) {
                    throw new Error('Câu trả lời đã tồn tại trong hệ thống');
                }
            }
        } else if (error.request) {
            // Xử lý request error
            console.error('Request Error:', error.request);
            throw new Error('Không thể kết nối đến server');
        }
        return Promise.reject(error);
    }
);

export default instance;
