import { logout } from "../features/authentication/authenticationReducer";
import store from "../store";

const request = async <T>(
  url: string,
  method: string,
  body: unknown = null
): Promise<T> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });
  if (res.ok) {
    return res.status === 204 ? null : ((await res.json()) as T);
  } else {
    if (res.status === 401) {
      store.dispatch(logout());
    }
    throw new Error(
      `Request error: ${url}: ${res.status}: ${JSON.stringify(
        await res.json()
      )}`
    );
  }
};

export const get = async <T>(url: string): Promise<T> =>
  await request<T>(url, "GET");

export const post = async <T>(url: string, body: unknown = null): Promise<T> =>
  await request<T>(url, "post", body);

export const put = async <T>(url: string, body: unknown): Promise<T> =>
  await request<T>(url, "put", body);

export const del = async <T>(url: string): Promise<T> =>
  await request<T>(url, "delete");
