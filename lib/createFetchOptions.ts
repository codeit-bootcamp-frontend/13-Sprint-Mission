import { setItem } from "@/utils/localstorage";

export type FetchOptionsType = {
  getAccessToken: () => string | undefined | Promise<string | undefined>;
  getRefreshToken?: () => Promise<string>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export function createFetchOptions({
  getAccessToken,
  getRefreshToken,
}: FetchOptionsType) {
  return async function fetcher<T>(
    url: string,
    options: RequestInit & {
      data?: unknown;
      next?: any;
    } = {},
  ): Promise<{ data: T; status: number }> {
    const { data, headers, next, ...restOptions } = options;
    let token = await getAccessToken();
    const isFormData = data instanceof FormData;

    const fullUrl = url.startsWith("/api") ? url : `${BASE_URL}${url}`;

    const fetchOptions: RequestInit & { next?: any } = {
      ...restOptions,
      headers: {
        Accept: "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...headers,
      },
      ...(next ? { next } : {}),
      body:
        data && options.method !== "GET"
          ? isFormData
            ? data
            : JSON.stringify(data)
          : undefined,
    };

    let res = await fetch(fullUrl, fetchOptions);

    let responseData: T = {} as T;
    const contentType = res.headers.get("content-type");
    const isJson = contentType?.includes("application/json");
    if (isJson) {
      responseData = await res.json();
    }

    const message =
      (responseData as any).message ||
      (responseData as any).data?.message ||
      (responseData as any).data?.data?.message;

    if (res.status === 401 && message === "jwt expired" && getRefreshToken) {
      const newAccessToken = await getRefreshToken();

      setItem("accessToken", newAccessToken);

      token = newAccessToken;

      const refreshOptions = {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${newAccessToken}`,
        },
      };

      res = await fetch(fullUrl, refreshOptions);

      const refreshContentType = res.headers.get("content-type");
      const refreshIsJson = refreshContentType?.includes("application/json");
      responseData = refreshIsJson ? await res.json() : ({} as T);
    }

    return {
      data: responseData,
      status: res.status,
    };
  };
}
