import axios, { InternalAxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

interface ServerRequestConfig extends InternalAxiosRequestConfig {
  withAuth?: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const apiServer = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiServer.interceptors.request.use(async (config: ServerRequestConfig) => {
  const { withAuth = false } = config;
  if (!withAuth) return config;

  const cookie = await cookies();
  const accessToken = cookie.get("accessToken")?.value;
  const refreshToken = cookie.get("refreshToken")?.value;

  config.headers = config.headers || {};

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  if (refreshToken) {
    config.headers.REFRESH_TOKEN = `Bearer ${refreshToken}`;
  }

  return config;
});

declare module "axios" {
  export interface AxiosRequestConfig {
    withAuth?: boolean;
  }
}

export default apiServer;
