import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
  headers: { 'Content-Type': 'application/json' },
});
