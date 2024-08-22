import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'buraya url gelmeli',
  timeout: 10000, //response gelmezse zaman asimi suresi
  headers: {
    'Content-Type': 'application/json', //bu kısımlar projeye göre değişebilir
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    response.owner = 'Ahmet';
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      // bu kısma istediğimiz if else eklenebilir ne yapmak istiyorsak artık
      console.log('redirect to login'); // buraya ne yapmak istiyorsak onu yazabiliriz
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
