import { getItem, removeItem, setItem } from "@/utils/localstorage";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

interface CustomRequestConfig extends InternalAxiosRequestConfig {
  withAuth?: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = async (
  tokenName: "accessToken" | "refreshToken"
): Promise<string | undefined> => {
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    const cookie = await cookies();
    return cookie.get(tokenName)?.value;
  } else {
    return getItem<string>(tokenName) ?? undefined;
  }
};

api.interceptors.request.use(
  async (config: CustomRequestConfig): Promise<CustomRequestConfig> => {
    const { withAuth = false } = config;
    if (!withAuth) return config;

    const accessToken = await getToken("accessToken");
    const refreshToken = await getToken("refreshToken");

    config.headers = config.headers || {};

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    if (refreshToken) {
      config.headers.REFRESH_TOKEN = `Bearer ${refreshToken}`;
    }

    return config;
  }
);

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (typeof window !== "undefined") {
      const accessToken: string | null = response.data.accessToken;
      const refreshToken: string | null = response.data.refreshToken;

      const editToken = (token: string) => token.replace("Bearer", "").trim();

      if (accessToken) {
        setItem("accessToken", editToken(accessToken));
      }
      if (refreshToken) {
        setItem("refreshToken", editToken(refreshToken));
      }
    }

    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      removeItem("accessToken");
      removeItem("refreshToken");

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

declare module "axios" {
  export interface AxiosRequestConfig {
    withAuth?: boolean;
  }
}

export default api;
