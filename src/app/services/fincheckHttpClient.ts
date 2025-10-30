import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from '../config/localStorageKeys';
import { sleep } from '../utils/sleep';

export const fincheckHttpClient = axios.create({
  baseURL: import.meta.env.VITE_FINCHECK_API_BASE_URL,
});

fincheckHttpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

fincheckHttpClient.interceptors.response.use(async (data) => {
  await sleep(500);
  return data;
});
