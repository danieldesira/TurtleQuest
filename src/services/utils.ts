import { logout } from "../features/authentication/authenticationReducer";
import store from "../store";

const convertFileToFormData = (file: File): FormData => {
  const formData = new FormData();
  formData.append("file", file);
  return formData;
};

const request = async <T>(
  url: string,
  method: string,
  body: unknown = null,
  contentType: "application/json" | "multipart/form-data" = "application/json"
): Promise<T> => {
  const data =
    contentType === "multipart/form-data" && body instanceof File
      ? body
      : JSON.stringify(body);
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, {
    method,
    headers: {
      "Content-Type": contentType,
    },
    body: data,
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
        await res.text()
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

export const uploadFile = async <T>(url: string, file: File): Promise<T> =>
  await request<T>(url, "put", file, "multipart/form-data");
