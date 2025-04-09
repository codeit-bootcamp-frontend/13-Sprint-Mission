export type FetchOptionsType = {
  getAccessToken: () => string | undefined | Promise<string | undefined>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function createFetchOptions({ getAccessToken }: FetchOptionsType) {
  return async function fetcher<T>(
    url: string,
    options: RequestInit & {
      data?: unknown;
      next?: NextFetchRequestConfig;
    } = {}
  ): Promise<{ data: T; status: number }> {
    const { data, headers, next, ...restOptions } = options;
    const token = getAccessToken();

    const fetchOptions: RequestInit & { next?: NextFetchRequestConfig } = {
      ...restOptions,
      headers: {
        Accept: "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(data ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
    };

    if (data && options.method && options.method !== "GET") {
      fetchOptions.body = JSON.stringify(data);
    }

    if (next) {
      fetchOptions.next = next;
    }

    const res = await fetch(`${BASE_URL}${url}`, fetchOptions);
    const contentType = res.headers.get("content-type");

    let responseData: T = {} as T;

    if (contentType?.includes("application/json")) {
      responseData = await res.json();
    }

    return {
      data: responseData,
      status: res.status,
    };
  };
}
