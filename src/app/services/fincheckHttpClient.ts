import axios from 'axios';

export const fincheckHttpClient = axios.create({
  baseURL: import.meta.env.VITE_FINCHECK_API_BASE_URL,
});
