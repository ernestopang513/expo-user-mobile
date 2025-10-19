import { SecureStorageAdapter } from '@/helpers/adapter/secure-storage.adapter';
import axios from 'axios';


const platformApi = axios.create({
    baseURL: 'http://192.168.1.113:8080'
});

platformApi.interceptors.request.use(async (config) => {
  // Verificar si tenemos un token en el secure storage
  const token = await SecureStorageAdapter.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
export { platformApi };

